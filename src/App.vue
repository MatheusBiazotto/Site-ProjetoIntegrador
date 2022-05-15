<template>
  <RouterView />
  <Footer />
</template>

<script>

import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

:root {
  --color-ambar: #ffbf00;
  --color-dark-blue: #054a91;
  --color-red: #de1a1a;
  --color-light-blue: #68c5db;
  --color-light-green: #7daa92;
  --color-mark-green: #37B652;
}

body {
  max-width: 100%;
}

html {
  scroll-behavior: smooth;
}

img {
  max-width: 100%;
}

.shadow{
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
