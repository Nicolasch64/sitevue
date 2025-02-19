<template>
  <figure>
    <div class="drawing-container">
      <a :href="link">
        <img :src="imgSrc" :alt="alt" />
      </a>
    </div>

    <figcaption>
      <p>{{ caption }} ({{ size }}) {{ year }}</p>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  imgSrc: String,
  alt: String,
  caption: String,
  size: String,
  year: String,
  link: String,
})
</script>

<style scoped>
.drawing-container {
  width: 45%;
  margin-bottom: 20px;
}

.drawing-container img {
  width: 100%;
  height: auto;
}

figcaption {
  text-align: center;
  margin-top: 10px;
}
</style>
