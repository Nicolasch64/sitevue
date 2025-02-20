<template>
  <header>
    <div class="globenomcontainer">
      <h1>Chapelle Nicolas</h1>

      <i class="fa-solid fa-globe langue fa-2xl" id="choixlangue"></i>

      <div id="languageMenu" class="language-menu">
        <ul>
          <li><a href="#">Fr</a></li>
          <li><a href="#">Eng</a></li>
        </ul>
      </div>
    </div>
    <nav>
      <div class="catégories">
        <div class="dessins">
          <RouterLink to="/Drawings"><h2>drawings</h2></RouterLink>
        </div>

        <div class="peintures">
          <RouterLink to="/paintings"><h2>paintings</h2></RouterLink>
        </div>

        <div class="photos">
          <a href="http://127.0.0.1:5500/photos.html"> <h2>pictures</h2></a>
        </div>

        <div class="sculptures">
          <a href="http://127.0.0.1:5500/sculptures.html"> <h2>sculptures</h2></a>
        </div>
      </div>
    </nav>

    <p class="bio">
      " I shape my artistic approach around the urban in its strictest definition: what is relative
      to the city..."
    </p>

    <a href="http://127.0.0.1:5500/bio.html"><p class="linkbio">learn more</p></a>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLanguageMenuVisible: false,
    }
  },
  methods: {
    toggleLanguageMenu() {
      this.isLanguageMenuVisible = !this.isLanguageMenuVisible
    },
  },
}
</script>
<style scoped>
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  background-color: #ffffffe2;

  border-bottom: 5px solid #000;
  width: 100%;
}

.globenomcontainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 3em;
  font-weight: bold;
  color: #333;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.langue {
  position: relative;
  cursor: pointer;
}

.language-menu {
  display: none;
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  font-family: Arial, Helvetica, sans-serif;
}

.language-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.language-menu ul li {
  padding: 8px 16px;
}

.language-menu ul li a {
  color: #000;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

.language-menu ul li:hover {
  background-color: #f0f0f0;
  font-family: Arial, Helvetica, sans-serif;
}

.language-menu.show {
  display: block;
}

.catégories {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
  border-bottom: 2px solid #888;
  padding: 1em 0;
}

.catégories div {
  margin: 0 1em;
}

.catégories h2 {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.bio {
  font-size: 1.5em;
  font-weight: bold;
  color: #555;
  text-align: right;
  margin-top: 2em;
  margin-right: 1em;
  font-family: Arial, Helvetica, sans-serif;
}

.linkbio {
  font-size: 1.5em;
  font-weight: bold;
  color: #e75f1f;
  text-align: right;
  display: inline-block;
  margin-top: 1em;
}

@media (max-width: 768px) {
  .globenomcontainer {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2.5em;
  }

  .catégories {
    flex-direction: column;
    margin-top: 1.5em;
  }

  .catégories div {
    margin: 0.5em 0;
  }

  .bio {
    font-size: 1em;
    text-align: center;
    margin-right: 0;
  }

  .linkbio {
    font-size: 1.1em;
    text-align: center;
    margin-right: 0;
  }
}
</style>
