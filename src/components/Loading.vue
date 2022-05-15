<template>
  <div id="loading">
      <img src="@/assets/img/ambar-logo-simple.svg" alt="Logo Ambar" />
      <p>Carregando...</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
#loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#loading img {
  width: 100px;
  animation: spin 2s infinite both;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>