import axios from 'axios'
import { defineStore } from 'pinia'

export const usePaintingStore = defineStore('paintings', {
  state: () => ({
    paintings: [],
    selectedpainting: null,
    loading: false,
    error: null,
  }),

  actions: {
    async addPainting(painting) {
      const { title, description, imageFile } = painting

      this.loading = true
      this.error = null
      try {
        const formData = new FormData()
        formData.append('file', imageFile)
        formData.append('upload_preset', 'your_upload_preset')

        const cloudinaryResponse = await axios.post(
          'https://api.cloudinary.com/v1_1/dwqpv9ozq/upload',
          formData,
        )

        const newPainting = {
          title,
          description,
          imageUrl: cloudinaryResponse.data.secure_url,
          year: new Date().getFullYear(),
        }

        const response = await axios.post('http://localhost:5000/api/paintings', newPainting)

        this.paintings.push(response.data)
      } catch (err) {
        this.error = err.response?.data?.message || err.message || 'An error occurred'
      } finally {
        this.loading = false
      }
    },

    async fetchPaintings() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:5000/api/paintings')

        if (response.status === 200) {
          this.paintings = response.data
        } else {
          throw new Error('Failed to fetch paintings')
        }
      } catch (err) {
        this.error = err.response?.data?.message || err.message || 'An error occurred'
      } finally {
        this.loading = false
      }
    },

    async fetchPaintingById(paintingId) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`http://localhost:5000/api/paintings/${paintingId}`)

        if (response.status === 200) {
          this.selectedpainting = response.data
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
    availablepaintings: (state) => state.paintings.length > 0,
  },
})
