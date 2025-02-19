<template>
  <footer>
    <div class="mentions">
      <h2>mentions légales</h2>
    </div>

    <div class="instagram">
      <a href="https://www.instagram.com/chapelle.nicolas/">
        <img
          src="../assets/images/icon/iconmonstr-instagram-11.svg"
          alt="logo insta"
          class="insta"
        />
      </a>
    </div>

    <div class="mail">
      <a href="http://127.0.0.1:5500/boot.html">
        <img src="../assets/images/icon/email-svgrepo-com.svg" alt="mail" class="monmail" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  background-color: rgb(255, 255, 255);
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  padding: 2% 1%;
  border-top: 5px solid black;
}

.mentions {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.75em;
  margin-left: 1%;
}

.instagram,
.mail {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
}

.instagram {
  justify-content: center;
}

.instagram img,
.mail img {
  width: 25px;
  height: 25px;
  margin: 0 10px;
}

.mail img {
  width: 25px;
  height: 25px;
}

@media (max-width: 600px) {
  footer {
    flex-direction: column;
    align-items: center;
  }

  .mentions {
    text-align: center;
    font-size: 0.6em;
    margin-bottom: 1em;
  }

  .instagram,
  .mail {
    margin-top: 1em;
  }

  .instagram img,
  .mail img {
    width: 20px;
    height: 20px;
  }
}
</style>
