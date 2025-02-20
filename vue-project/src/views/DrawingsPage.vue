<template>
  <Header />

  <div class="cat1">
    <h2>DRAWINGS</h2>
  </div>

  <div v-if="loading">Loading drawings...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div class="image">
    <figure class="tup">
      <a
        href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/repticoll_1_eppnux.jpg"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/repticoll_1_eppnux.jpg"
          alt="reptinight"
        />
      </a>
      <figcaption class="texte">
        <p>Description de l'image</p>
      </figcaption>
    </figure>

    <figure class="rep">
      <a
        href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/reptinight_on5ivy.png"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/reptinight_on5ivy.png"
          alt="reptinight"
        />
      </a>
      <figcaption class="texte">
        <p>Description de l'image</p>
      </figcaption>
    </figure>

    <div class="range" v-if="drawings.length > 0">
      <figure v-for="drawing in drawings" :key="drawing._id" class="tup">
        <a :href="drawing.imageUrl" target="_blank">
          <img :src="drawing.imageUrl" :alt="drawing.description" />
        </a>
        <figcaption class="texte">
          <p>{{ drawing.description }}</p>
        </figcaption>
      </figure>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDrawingsStore } from '../store/drawingsStore'
import Header from '../components/HeaderComp.vue'
import Footer from '../components/FooterComp.vue'

const drawingsStore = useDrawingsStore()

const { drawings, loading, error, fetchDrawings, fetchDrawingById } = drawingsStore

onMounted(async () => {
  await fetchDrawings()
  console.log('Drawings:', drawings)

  const drawingId = '67b6ef68c1507cea7838b855'
  await fetchDrawingById(drawingId)
  console.log('Drawing details:', drawings)
})
</script>

<style scoped>
.cat1 {
  text-align: center;
  margin-top: 2em;
}

.image {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2em;
}
.range {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 1em;
  border-bottom: solid rgb(102, 102, 102) 0.25em;
  width: 100%;
}

.tup img {
  width: 50%;
  height: auto;
  border: 2px solid black;
}

.tupac img,
.bre img {
  width: 300px;
  height: auto;
  border: 2px solid black;
}

.range2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.2em;
  border-bottom: 5px solid rgba(169, 169, 169, 0.25);
  padding-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
  /* background-color: yellow; */
}
/* 
.ali {
  background-color: rgb(214, 214, 214);
  width: 46em;
  height: 30em;
} */

.alien3 {
  width: 44em;
  height: 28em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
}
.texte3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 75%;
}

/* .ram {
  background-color: rgb(214, 214, 214);
  width: 27em;
  height: 37em;
  margin-right: 8em;
} */

.backyard {
  width: 30em;
  height: 45em;
  margin-right: 3em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
}

.texte4 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 35%;
}

.range3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 5px solid rgba(169, 169, 169, 0.25);
  padding-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
  /* background-color: purple; */
}

/* .bur {
  background-color: rgb(214, 214, 214);
  width: 40em;
  height: 32em;
} */

.burden {
  width: 38em;
  height: 30em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte5 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 75%;
}
/* .cab {
  background-color: rgb(214, 214, 214);
  width: 40em;
  height: 32em;
} */

.cabane {
  width: 38em;
  height: 30em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte6 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 75%;
}

.range4 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;
  border-bottom: 5px solid rgba(169, 169, 169, 0.25);
  padding-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
  /* background-color: aquamarine; */
}
</style>
