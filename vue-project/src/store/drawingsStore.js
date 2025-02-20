import axios from 'axios'
import { defineStore } from 'pinia'

export const useDrawingsStore = defineStore('drawings', {
  state: () => ({
    drawings: [],
    selectedDrawing: null,
    loading: false,
    error: null,
  }),

  actions: {
    // Fonction pour ajouter un dessin
    async addDrawing(drawing) {
      const { title, description, imageFile } = drawing

      this.loading = true
      this.error = null
      try {
        // 1. Envoyer l'image à Cloudinary
        const formData = new FormData()
        formData.append('file', imageFile) // L'image en question
        formData.append('upload_preset', 'your_upload_preset') // Le preset Cloudinary

        const cloudinaryResponse = await axios.post(
          'https://api.cloudinary.com/v1_1/dwqpv9ozq/upload',
          formData,
        )

        // 2. Ajouter les métadonnées dans MongoDB avec l'URL Cloudinary
        const newDrawing = {
          title,
          description,
          imageUrl: cloudinaryResponse.data.secure_url, // L'URL Cloudinary de l'image
          year: new Date().getFullYear(),
        }

        const response = await axios.post('http://localhost:5000/api/drawings', newDrawing)

        // Ajouter le dessin dans le store
        this.drawings.push(response.data)
      } catch (err) {
        this.error = err.response?.data?.message || err.message || 'An error occurred'
      } finally {
        this.loading = false
      }
    },

    // Fonction pour récupérer tous les dessins depuis MongoDB (avec les URLs Cloudinary)
    async fetchDrawings() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:5000/api/drawings')

        if (response.status === 200) {
          this.drawings = response.data
        } else {
          throw new Error('Failed to fetch drawings')
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message || 'An error occurred'
      } finally {
        this.loading = false
      }
    },

    // Fonction pour récupérer un dessin par ID depuis MongoDB
    async fetchDrawingById(drawingId) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`http://localhost:5000/api/drawings/${drawingId}`)

        if (response.status === 200) {
          this.selectedDrawing = response.data
        } else {
          throw new Error('Failed to fetch drawing by ID')
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message || 'An error occurred'
      } finally {
        this.loading = false
      }
    },
  },

  getters: {
    availableDrawings: (state) => state.drawings.length > 0,
  },
})
