<template>
  <RouterView />
  <Footer />
</template>

<script>

import Footer from "@/components/Footer.vue";


export default {
  components: {
    Footer,
  },
  // methods: {
  //   MenuOrHeader() {
  //     if (location.pathname == "/") {
  //       return <Header />;
  //     } else {
  //       return <MainMenu />;
  //     }
  //   },
  // },
  // mounted() {
  //   this.MenuOrHeader();
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
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
</style>
