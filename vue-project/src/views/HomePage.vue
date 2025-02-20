<script setup>
import Headercomp from '@/components/HeaderComp.vue'
import Gallery from '@/components/Gallery.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>
<template>
  <Headercomp />
  <p class="bio">
    " I shape my artistic approach around the urban in its strictest definition: what is relative to
    the city..."
  </p>

  <a href="http://127.0.0.1:5500/bio.html"><p class="linkbio">LEARN MORE</p></a>
  <Gallery />
  <FooterComp />
</template>

<style setup>
.bio {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.linkbio {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: orange;
  border-bottom: 2px solid black;
}
</style>
