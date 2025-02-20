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
    <div class="range2">
      <figure class="ali">
        <a href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965716/alien3_gmyasl.jpg"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965716/alien3_gmyasl.jpg"
            alt="dessin numérique de alien2"
            class="alien3"
        /></a>

        <figcaption class="texte3">
          <p>"Fiorina Fury 161" digital drawing 2023</p>
        </figcaption>
      </figure>

      <figure class="ram">
        <a href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965948/natas_m2vpr0.jpg"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965948/natas_m2vpr0.jpg"
            alt=" dessin numérique d'une rampe de skate"
            class="backyard"
        /></a>

        <figcaption class="texte4">
          <p>"Backyard Ramp" digital drawing 2023</p>
        </figcaption>
      </figure>
    </div>

    <div class="range3">
      <figure class="bur">
        <a href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965925/burden_kcnsou.jpg"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965925/burden_kcnsou.jpg"
            alt="dessin a l encre de chris burden"
            class="burden"
        /></a>

        <figcaption class="texte5">
          <p>"Chris Burden"ink on paper (21x29cm)2023</p>
        </figcaption>
      </figure>

      <figure class="cab">
        <a href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965936/freddy_cu98bu.jpg">
          <img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965936/freddy_cu98bu.jpg"
            alt="dessin sur carton de freddy kruger assis dans un parc"
            class="cabane"
        /></a>

        <figcaption class="texte6">
          <p>"Freddy kruger in the park" acrylic on cardboard (50x32cm) 2023</p>
        </figcaption>
      </figure>
    </div>

    <div class="range4">
      <figure class="cad">
        <a href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965953/pointb_dxquip.jpg"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965953/pointb_dxquip.jpg"
            alt="dessin numérique du film point break"
            class="cadillac"
        /></a>

        <figcaption class="texte7">
          <p>"Point Break" digital drawing 2023</p>
        </figcaption>
      </figure>

      <figure class="can">
        <a
          href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965940/jacob_lake_2_jwwhfw.jpg"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965940/jacob_lake_2_jwwhfw.jpg "
            alt="dessin d'un homme en canoe"
            class="canoe"
        /></a>

        <figcaption class="texte8">
          <p>"The Monkey Wrench Gang" ink on paper(21x29xm) 2023</p>
        </figcaption>
      </figure>
    </div>

    <div class="range5">
      <figure class="rep">
        <a
          href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/reptinight_on5ivy.png"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965956/reptinight_on5ivy.png"
            alt="dessin numérique d un policier reptilien"
            class="babylon"
        /></a>

        <figcaption class="texte9">
          <p>"Reptilian investigation " Digital drawing 2023</p>
        </figcaption>
      </figure>

      <figure class="day">
        <a href="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965929/dayton2_yd7hc9.jpg"
          ><img
            src="https://res.cloudinary.com/dwqpv9ozq/image/upload/v1734965929/dayton2_yd7hc9.jpg"
            alt="dessin numérique de la plage de dayton"
            class="dayton"
        /></a>

        <figcaption class="texte10">
          <p>"Daytona Beach" digital drawing 2023</p>
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
  flex-wrap: wrap;
  justify-content: space-between;
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
.cadillac {
  width: 36em;
  height: 26em;
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
  margin-left: 75%;
}

/* .can {
  background-color: rgb(214, 214, 214);
  width: 42em;
  height: 31em;
} */

.canoe {
  width: 40em;
  height: 29em;
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
  margin-left: 75%;
  margin-bottom: 2.5em;
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
  margin-left: 75%;
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
  margin-left: 75%;
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
  width: 40em;
  height: 28em;
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
  margin-left: 75%;
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
  margin-left: 75%;
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
  height: 20em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.por {
  width: 38em;
  height: 26em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}
.range8 {
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

.ramp {
  width: 40em;
  height: 30em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}

.bit {
  width: 38em;
  height: 26em;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 1em;
  border: 2px solid black;
  padding: 1em;
}
</style>
