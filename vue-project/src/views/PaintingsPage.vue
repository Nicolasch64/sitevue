<template>
  <Header />

  <div class="cat1">
    <h2>PAINTINGS</h2>
  </div>

  <div v-if="loading">Loading paintings...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div v-if="paintings && paintings.length > 0" class="image">
    <figure v-for="painting in paintings" :key="painting._id" class="tup">
      <a :href="painting.imageUrl" target="_blank">
        <img :src="painting.imageUrl" :alt="painting.description" />
      </a>
      <figcaption class="texte">
        <p>{{ painting.description }}</p>
      </figcaption>
    </figure>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePaintingStore } from '../store/paintingStore'
import Header from '../components/HeaderComp.vue'
import Footer from '../components/FooterComp.vue'

const paintingsStore = usePaintingStore()

const { paintings, loading, error, fetchPaintings } = paintingsStore

onMounted(async () => {
  await fetchPaintings() // Charge les peintures
  console.log('Paintings loaded:', paintings)
})
</script>

<style scoped></style>
