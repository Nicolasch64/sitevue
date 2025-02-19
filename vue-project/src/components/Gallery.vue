<template>
  <div>
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
    </div>

    <div class="range2">
      <figure class="ali">
        <a href="http://127.0.0.1:5500/peintures.html"
          ><img
            src="../assets/images/peintures/blueresto.png"
            alt="peinture de deux personnes atablées"
            class="blueresto"
        /></a>

        <figcaption class="texte3">
          <p>"Blue resto" oil on canvas 2019</p>
        </figcaption>
      </figure>

      <figure class="dive">
        <a href="http://127.0.0.1:5500/peintures.html"
          ><img
            src="../assets/images/peintures/dive.png"
            alt="peinture d'une devanture de surf shop"
        /></a>

        <figcaption class="texte4">
          <p>"Dive" oil on canvas 2020</p>
        </figcaption>
      </figure>
    </div>

    <div class="range3">
      <div style="position: relative; height: 400px">
        <div style="position: absolute; z-index: 1">
          <img
            src="../assets/images/expo/assaut1.jpg"
            alt=" exposition à saint etienne"
            class="asso1"
          />
        </div>

        <div
          style="
            position: absolute;
            top: 60px;
            width: 400px;
            height: 100px;
            z-index: 2;
            font-size: 200%;
          "
        >
          <a href="http://127.0.0.1:5500/bio.html"><p class="exp">Explore Exhibitions</p></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
}
</script>
<style scoped>
.image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  background-color: rgb(255, 255, 255);
  margin-top: 2%;
  overflow-y: auto;
  padding-bottom: 20px;
}

.range {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 1em;
  border-bottom: solid rgb(102, 102, 102) 0.25em;
}

.tupac,
.bre,
.blueresto,
.dive {
  width: 100%;
  max-width: 45%;
  margin-bottom: 2em;
}

.tupac img,
.bre img {
  width: 75%;
  height: auto;
  max-width: 100%;
  margin-right: 10px;
}

.blueresto,
.dive img {
  height: auto;
  max-width: 100%;
}

.blueresto {
  width: 70%;
}

.dive img {
  width: 85%;
}

.texte,
.texte2,
.texte3,
.texte4 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 0.75em;
  text-align: center;
  margin-top: 1em;
}

.range2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 1em;
  border-bottom: solid rgb(102, 102, 102) 0.25em;
}

.range3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  background-color: rgb(255, 255, 255);
}

.asso1 {
  width: 10%;
  height: auto;
  position: absolute;
  z-index: 3;
}

.exp {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(14, 14, 14);
  font-size: 1.5em;
  text-align: center;
  margin-top: -60px;
}
</style>
