<template>
  <header class="header">
    <nav class="back-nav">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/races">Corridas</RouterLink>
    </nav>

    <div class="section2">
      <div></div>
      <div class="apresentation">
        <div>
          <h1>{{ raceEdition }}º Corrida de Rolimã na FATEC</h1>
          <p>Corrida anual recorrente, onde os karts descem uma ladeira para descobrir qual deles é o melhor construído! Participe desse evento e descubra se o seu kart será o mais rápido! Para mais detalhes, clique no botão abaixo.</p>
          <button class="bt-about">Saiba mais</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
  methods: {
    scrollDownload() {
      const divDownload = document.getElementById("download");
      divDownload.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed:{
    raceEdition(){
      //2022 é ano que foi desenvolvido este componente
      //Somamos 7 já que a edição do ano de 2022 é a sétima
      //Dessa forma, automatizamos a contagem de edição
      return 2022 - new Date().getFullYear() + 7
    }
  }
};
</script>

<style>
.header {
  background: linear-gradient(#00000080, rgba(0, 0, 0, 0.2)),url("@/assets/img/img01.png");
  padding-bottom: 3%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
}

.back-nav {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
}

.back-nav > a {
  color: #ffffff;
  font-size: 30px;
  font-weight: bolder;
  text-decoration: none;
}

.section2 {
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 100%;
}

.apresentation {
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  margin-top: 150px;
}

.apresentation > div > h1 {
  white-space: pre-line;
  color: #ffffff;
  font-size: 4rem;
  font-weight: 700;
}

.apresentation > div > p {
  font-size: 18px;
  margin-top: 20px;
  color: #ffffff;
  white-space: pre-line;
}

.bt-about {
  margin-top: 20px;
  width: 20vw;
  font-size: 2.5rem;
  color: #ffffff;
  background: var(--color-dark-blue);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 300;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .header {
    background-size: auto;
    background-position: center;
  }

  .section2 {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    padding-bottom: 10%;
  }

  .apresentation {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    justify-items: center;
    padding: 0;
  }

  .apresentation > div {
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
  }

  .apresentation > div > h1 {
    font-size: 3.2rem;
    text-align: justify;
    margin-left: 5%;
    margin-right: 5%;
  }

  .apresentation > div > p {
    font-size: 1rem;
    text-align: justify;
    margin-left: 5%;
    margin-right: 5%;
    line-height: 1.3;
  }

  .bt-about {
    width: auto;
    padding-top: 10px;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-bottom: 10px;
  }
}

@media screen and (min-width: 1079px) {
  .header {
    padding-bottom: 10%;
  }
}
</style>
