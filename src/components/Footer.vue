<template>
  <footer class="footer">
    <div class="back-footer">
      <div class="footer-logo">
        <img src="@/assets/img/ambar-logo.svg" alt="Logo principal" width="100"/>
        <q>Descubra novos horizontes.</q>
      </div>
      <div class="footer-links">
        <h4>Acesso rápido</h4>
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/races">Corridas</RouterLink>
      </div>
      <div class="footer-contact">
        <h4>Contato</h4>
        <span>example@example.com</span>
      </div>
    </div>
    <h6>Projetado por AmbarTech - {{ year }}</h6>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer {
  background-color: white;
}

.back-footer {
  display: grid;
  grid-template-columns: 34% 33% 33%;
  grid-template-rows: 100%;
  padding: 2%;
  width: 70%;
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-links {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.footer-links > a {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  margin-top: 10px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.footer-contact > span {
  color: #000000;
  font-weight: 400;
  margin-top: 10px;
}

.footer > h6 {
  margin-top: 30px;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  background-color: black;
  color: white;
  padding: 1%;
}

@media screen and (max-width: 767px) {
  .back-footer {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }

  .footer-logo {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  .footer-links {
    align-items: center;
    justify-items: center;
    margin-top: 20px;
  }

  .footer-links > a {
    margin-top: 10px;
  }

  .footer-contact {
    margin-top: 20px;
    align-items: center;
  }
}
</style>
