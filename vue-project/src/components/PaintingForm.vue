<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="title" placeholder="Titre" />
      <textarea v-model="description" placeholder="Description"></textarea>
      <input v-model="year" type="number" placeholder="Année" />
      <button type="submit">Ajouter le dessin</button>
    </form>
  </div>
</template>

<script>
import { usepaintingStore } from '@/stores/paintings'

export default {
  data() {
    return {
      title: '',
      description: '',
      year: '',
      imageUrl:
        'https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/reptinight_on5ivy.png',
    }
  },
  methods: {
    async handleSubmit() {
      const newPainting = {
        title: this.title,
        description: this.description,
        imageUrl:
          'https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/reptinight_on5ivy.png',
        year: this.year,
      }

      const store = usepaintingStore()
      await store.addPainting(newPainting)
    },
  },
}
</script>
