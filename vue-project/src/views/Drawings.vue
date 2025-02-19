<template>
  <Header />

  <div class="cat1">
    <h2>DRAWINGS</h2>
  </div>

  <i class="fa-solid fa-globe langue fa-2xl" id="choixlangue"></i>
  <div id="languageMenu" class="language-menu">
    <ul>
      <li><a href="#">Fr</a></li>
      <li><a href="#">Eng</a></li>
    </ul>
  </div>

  <div class="image">
    <div class="range">
      <figure class="tup">
        <div class="tupac">
          <a href="http://127.0.0.1:5500/index.html"
            ><img
              src="../assets/images/dessins/repticoll1.jpeg"
              alt="dessin de day of the walking dead"
          /></a>
        </div>

        <figcaption class="texte">
          <p>"Day of the walking dead" ink on paper (30x40cm)2023</p>
        </figcaption>
      </figure>

      <figure class="bre">
        <a href="http://127.0.0.1:5500/index.html"
          ><img
            src="../assets/images/dessins/bret.jpg"
            alt="dessin digitale du livre the shards de bret easton ellis"
        /></a>

        <figcaption class="texte2">
          <p>"The Shards" pen on paper (45x20cm)2023</p>
        </figcaption>
      </figure>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/HeaderComp.vue'
import Footer from '../components/FooterComp.vue'
// import DrawingItem from '../components/DrawingItem.vue'
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
}
.tupac img,
.bre img {
  width: 75%;
  height: auto;
  max-width: 100%;
  margin-right: 10px;
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
