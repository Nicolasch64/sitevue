<template>
  <Header />

  <div class="cat1">
    <h2>PAINTINGS</h2>
  </div>

  <div v-if="loading">Loading paintings...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div class="image">
    <figure class="stu">
      <a
        href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1740039916/Capture_d_%C3%A9cran_2024-10-18_%C3%A0_11.03.35_keuscv.png"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1740039916/Capture_d_%C3%A9cran_2024-10-18_%C3%A0_11.03.35_keuscv.png"
          alt="STUTTGART"
        />
      </a>
      <figcaption class="texte">
        <p>Description de l'image</p>
      </figcaption>
    </figure>

    <figure class="dog">
      <a
        href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1740039903/Capture_d_%C3%A9cran_2024-10-18_%C3%A0_10.56.54_sjzddc.png"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1740039903/Capture_d_%C3%A9cran_2024-10-18_%C3%A0_10.56.54_sjzddc.png"
          alt="reptinight"
        />
      </a>
      <figcaption class="texte">
        <p>Description de l'image</p>
      </figcaption>
    </figure>

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

    <div class="range2">
      <figure class="ali">
        <img
          src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1740039905/Capture_d_%C3%A9cran_2024-10-18_%C3%A0_10.57.34_rjbnmz.png"
          alt="peinture de deux personnes attablees"
          class="palm"
        />

        <figcaption class="texte3">
          <p>"Blue Restaurant" huile sur toile(145x200cm) 2021</p>
        </figcaption>
      </figure>

      <figure class="sal">
        <img
          src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1740039916/IMG_20190917_140642_mo0uts.jpg"
          alt="peinture d un parking californien"
          class="suburb"
        />

        <figcaption class="texte4">
          <p>"California Suburb" huile sur toile (150x80cm)2020</p>
        </figcaption>
      </figure>
    </div>
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

<style scoped>
a:link,
a:hover,
a:visited,
a:active {
  text-decoration: none;
  color: black;
}

body {
  width: 100vw;
}
img {
  width: 100%;
  height: 100%;
}

h1 {
  display: inline-block;
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 2%;
  width: 9em;
}

.globenomcontainer {
  display: flex;
  justify-content: space-between;
  height: 4em;
}
.langue {
  /* display: flex;
	justify-content: end;
	position: absolute;
	top: 0;
	right: 0; */

  margin-right: 5%;
  margin-top: 2%;
}

.language-menu {
  display: none; /* Masquer le menu par défaut */
  position: absolute;
  top: 40px; /* Positionnez-le sous l'icône du globe */
  right: 20px;
  background-color: white;
  border: 1px solid #000000;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.language-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.language-menu ul li {
  padding: 8px 16px;
}

.language-menu ul li a {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;

  color: rgb(0, 0, 0);
}

.language-menu ul li:hover {
  background-color: #f0f0f0;
}

.language-menu.show {
  display: block;
}
.retour {
  display: flex;
  justify-content: end;

  position: absolute;
  top: 0;
  right: 0;
  margin-right: 5%;
  margin-top: 2.3%;
}

.return {
  width: 1.5em;
}

.langue {
  display: flex;
  justify-content: end;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 2%;
  margin-top: 2%;
}

.catégories {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: rgb(255, 255, 255);
  border-bottom: 5px solid black;
  margin-left: 1%;
  margin-right: 1%;
}
.dessins {
  display: flex;
  margin-left: 2%;
}
.sculptures {
  display: flex;
  margin-right: 2%;
}

.cat1 {
  display: flex;
  justify-content: center;
  margin-right: 5%;
}

h2 {
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
}

.image {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 100px;

  background-color: rgb(255, 255, 255);
  margin-top: 2%;
  overflow-y: scroll;
  height: 10000px;
}

.range {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  background-color: rgb(255, 255, 255);
  border-bottom: 5px solid rgba(169, 169, 169, 0.25);
  padding-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
  height: 30em;

  /* background-color: red; */
}
.stu {
  width: 40em;
  height: auto;
  margin-left: 2em;
  margin-top: 1em;
}

.texte {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  align-content: flex-end;
  font-size: 0.75em;
  margin-left: 60%;
  width: 25em;
}

.dog {
  width: 41em;
  height: auto;
  margin-left: 1em;
  margin-top: 1em;
}

.texte2 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 75%;
  width: 25em;
  margin-left: 60%;
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

.blueresto {
  width: 44em;
  height: 33em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
}
.texte3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 62%;
  width: 25em;
}

/* .ram {
  background-color: rgb(214, 214, 214);
  width: 27em;
  height: 37em;
  margin-right: 8em;
} */

.ram {
  width: 30em;
  height: 35em;
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
  width: 25em;
  margin-left: 40%;
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
  margin-left: 65%;
  width: 20em;
}
/* .cab {
  background-color: rgb(214, 214, 214);
  width: 40em;
  height: 32em;
} */

.cabane {
  width: 38em;
  height: 35em;
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
  margin-left: 55%;
  width: 35em;
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
}

/* .cad {
  background-color: rgb(214, 214, 214);
  width: 38em;
  height: 28em;
} */

.cadillac {
  width: 39em;
  height: 32em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte7 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 65%;
  width: 20em;
}

/* .can {
  background-color: rgb(214, 214, 214);
  width: 42em;
  height: 31em;
} */

.canoe {
  width: 32em;
  height: 39em;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte8 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 55%;
  margin-bottom: 2.5em;
  width: 25em;
}

.range5 {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  gap: 0.2em;
  border-bottom: 5px solid rgba(169, 169, 169, 0.25);
  padding-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
}

/* .bab {
  background-color: rgb(214, 214, 214);
  width: 44em;
  height: 32em;
} */

.babylon {
  width: 40em;
  height: 30em;
  margin-left: 0.2em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte9 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 60%;
  width: 25em;
}

/* .day {
  background-color: rgb(214, 214, 214);
  width: 44em;
  height: 30em;
} */

.dayton {
  width: 40em;
  height: 28em;
  margin-left: 1em;
  margin-right: 2em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte10 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 52%;
  margin-bottom: 15%;
}

.range6 {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  gap: 0.2em;
  border-bottom: 5px solid rgba(169, 169, 169, 0.25);
  padding-bottom: 3em;
  margin-left: 1em;
  margin-right: 1em;
}

.coven {
  width: 32em;
  height: 38em;
  margin-left: 1em;
  margin-right: 2em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte11 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 53%;
  width: 25em;
  margin-bottom: 15%;
}

.LA {
  width: 30em;
  height: 20em;
  margin-left: 1em;
  margin-right: 2em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.texte12 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: end;
  font-size: 0.75em;
  margin-left: 55%;
  width: 25em;
  margin-bottom: 15%;
}

.range7 {
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

.jac {
  width: 32em;
  height: 40em;
  margin-right: 1em;
  margin-left: 1em;

  border: 2px solid black;
  padding: 1em;
}

.por {
  width: 38em;
  height: 32em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

footer {
  background-color: rgb(255, 255, 255);
  margin-top: 2em;
}

.mentions {
  color: rgb(0, 0, 0);

  margin-left: 1%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.5em;
  margin-bottom: 2%;
  margin-top: 2%;
}

.instagram {
  height: 20px;
  width: 20px;

  margin-top: 3em;
}

.mail {
  display: flex;
  justify-content: end;
  height: 20px;
  margin-right: 10%;
  margin-top: 3em;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-top: 5px solid black;
  margin-top: 5%;
}
</style>
