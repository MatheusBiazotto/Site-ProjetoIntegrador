<template>
  <div>
    <MainMenu />
    <section>
      <div class="next-event">
        <h2>Próximo evento em</h2>
        <h2 id="conta-tempo"></h2>
      </div>
    </section>
    <section class="buttons">
      <button title="Recarregar" @click="getData" id="reloadButton">
        {{ reloadStatus }} <ion-icon name="refresh-outline"></ion-icon>
      </button>
    </section>
    <Loading v-show="loading" />
    <div class="no-data" v-if="data.length === 0 && !loading">
      <h4>Não foram encontrados dados! :c</h4>
      <br />
      <iframe src="https://embed.lottiefiles.com/animation/99955" frameborder="0"></iframe>
    </div>
    <section id="cards" v-if="data.length !== 0 && !loading">
      <div class="main-card card-padding" v-for="ano in years" :key="ano">
        <div class="card-year">
          <h2>{{ ano }}</h2>
          <div class="card-row-hrs">
            <div class="card-column-hrs">
              <hr />
              <hr />
              <hr />
            </div>
          </div>
        </div>
        <div class="card-more-info">
          <div class="card-more-info-teams">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people-fill"
              viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fill-rule="evenodd"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
            <span>{{ filterByYear(data, ano).length }}</span>
          </div>

          <span>Clique em uma equipe para visualizar mais informações!</span>
        </div>
        <div class="card-padding" v-for="item in filterByYear(data, ano)" :key="item.id">
          <!-- Aqui começa a listar as equipes -->
          <div class="card-list-teams">
            <img v-if="item.position == 1" v-show="item.position >= 1 && item.position <= 3"
              src="@/assets/img/first_pos.png" alt="Primeiro lugar" />
            <img v-if="item.position == 2" v-show="item.position >= 1 && item.position <= 3"
              src="@/assets/img/sec_pos.png" alt="Segundo lugar" />
            <img v-if="item.position == 3" v-show="item.position >= 1 && item.position <= 3"
              src="@/assets/img/thrd_pos.png" alt="Terceiro lugar" />
            <div class="card-teams-info">
              <h4 v-if="item.position > 3" @click="showMoreInfo(`${item.name}info`)" class="team-title">
                {{ `${item.position}° - Equipe ${item.name}` }}
              </h4>
              <h4 @click="showMoreInfo(`${item.name}info`)" class="team-title" v-else>
                Equipe - {{ item.name }}
              </h4>
              <div title="Média de tempo (menor é melhor)">
                <ion-icon name="medal-outline" class="ion-medal"></ion-icon>
                <span>{{ item.mean }}</span>
                <div class="more-info" :id="`${item.name}info`" style="display:none">
                  <br />
                  <strong>Baterias</strong>
                  <ol>
                    <li>
                      <ion-icon name="timer-outline" class="ion-time"></ion-icon>
                      {{ item.minutes[0] }}:{{ item.seconds[0] }}:{{
                          item.miliseconds[0]
                      }}
                    </li>
                    <li>
                      <ion-icon name="timer-outline" class="ion-time"></ion-icon>
                      {{ item.minutes[1] }}:{{ item.seconds[1] }}:{{
                          item.miliseconds[1]
                      }}
                    </li>
                    <li>
                      <ion-icon name="timer-outline" class="ion-time"></ion-icon>
                      {{ item.minutes[2] }}:{{ item.seconds[2] }}:{{
                          item.miliseconds[2]
                      }}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "RacesView",
  data() {
    return {
      data: [],
      years: [],
      indexYear: 0,
      qtdYear: [],
      prox: 0,
      reloadStatus: "Recarregar",
      loading: true,
    };
  },
  methods: {
    clock() {
      setInterval(function () {
        var _segundo = 1000;
        var _minuto = _segundo * 60;
        var _hora = _minuto * 60;
        var _dia = _hora * 24;

        var atual = new Date();
        var fim = new Date("05/21/2023 10:00:00");

        var diferenca = fim - atual;

        var dias = Math.floor(diferenca / _dia);
        var horas = Math.floor((diferenca % _dia) / _hora);
        var minutos = Math.floor((diferenca % _hora) / _minuto);
        var segundos = Math.floor((diferenca % _minuto) / _segundo);

        document.querySelector(
          "h2#conta-tempo"
        ).innerHTML = `${dias} Dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
      }, 1000);
    },
    getData() {
      const url = "https://kartrace-1ea9.restdb.io/rest/teams";
      let years_repetion = [];
      let data_f = [];
      const reloadButton = document.querySelector("#reloadButton");
      reloadButton.disabled = true;
      this.reloadStatus = "Carregando...";
      this.loading = true;

      fetch(url, {
        method: "GET",
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "621bc02e34fd621565858a26",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data_f = data;
          this.loading = false;
          this.reloadStatus = "Recarregar";
          reloadButton.disabled = false;
          this.data = data_f.sort((a, b) => {
            if (a.position < b.position) return -1;
            if (a.position > b.posiiton) return 1;
            return 0;
          });

          for (let i = 0; i < this.data.length; i++) {
            if (years_repetion[i] !== this.data[i].created_year) {
              years_repetion.push(this.data[i].created_year);
            }
          }

          this.years = [...new Set(years_repetion)];
          this.years.sort((a, b) => b - a);
        });
    },
    filterByYear(arr, actualYear) {
      return arr.filter((item) => item.created_year == actualYear);
    },
    showMoreInfo(id) {
      const element = document.querySelector(`#${id}`);

      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    },
  },
  computed: {
    sortValues(a, b) {
      return a - b;
    },
  },
  mounted() {
    this.getData();
    this.clock();
  },
  components: {
    MainMenu,
    Loading,
  },
};
</script>

<style >
body {
  background-color: #e6e6e6;
}

.next-event {
  background: linear-gradient(#00000080, rgba(0, 0, 0, 0.4)),
    url("@/assets/img/img04.png");
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 8px 5px 10px #0000004f;
  width: 100%;
  padding-top: 4%;
  padding-bottom: 5%;
  text-align: center;
}

.next-event>h2 {
  color: #ffffff;
  font-weight: 600;
}

#conta-tempo {
  font-weight: 300;
}

.main-card {
  margin-left: 15%;
  margin-right: 15%;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 5%;
  box-shadow: 8px 5px 10px #0000004f;
  background-color: #ffffff;
}

.card-padding {
  padding: 2%;
}

.card-year {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-year>h2 {
  margin-bottom: 2px;
  font-size: 3rem;
}

.card-row-hrs {
  display: flex;
  flex-direction: row;
  justify-content: flex-end !important;
  align-items: center;
  width: 100%;
}

.card-column-hrs {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-column-hrs>hr {
  width: 55vw;
  margin-bottom: 5px;
  margin-left: 10px;
  border: none;
  background-color: #000000;
  height: 5px;
}

.card-more-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-more-info>span {
  background-color: var(--color-mark-green);
  padding: 5px 15px 5px 15px;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  margin-left: 50px;
}

.card-more-info-teams {
  gap: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-more-info-teams>span {
  font-size: 1.5rem;
  font-weight: 300;
}

.card-more-info-teams>svg {
  color: var(--color-dark-blue);
}

.card-more-info-date {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.card-more-info-date>span {
  font-size: 1.5rem;
  font-weight: 300;
}

.card-more-info-date>svg {
  color: var(--color-light-green);
}

.card-list-teams {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.card-teams-info {
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}

.card-teams-info>h4 {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-teams-info>div>svg {
  color: var(--color-red);
  font-weight: 100;
  margin-right: 10px;
}

.card-teams-info>div>span {
  font-size: 1rem;
  font-weight: 300;
}

.card-teams-info>span {
  color: #666666;
  font-size: 0.9rem;
  font-weight: 400;
}

.no-data {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.no-data>iframe {
  height: 50%;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#reloadButton {
  background-color: var(--color-dark-blue);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: 0.3s;
}

#reloadButton:hover {
  background-color: black;
}

#reloadButton:disabled {
  background-color: var(--color-light-blue);
  color: #ffffff;
}

ion-icon {
  font-size: 1.5rem;
}

.more-info ol {
  padding-left: 14%;
}

.ion-medal {
  color: tomato;
}

.ion-time {
  color: cornflowerblue;
}

.team-title {
  cursor: pointer;
}

.team-title:hover {
  color: var(--color-dark-blue);
}

@media screen and (max-width: 767px) {
  .main-card {
    margin-left: 5%;
    margin-right: 5%;
  }

  .card-column-hrs>hr {
    width: 30vw;
  }

  .card-more-info>span {
    padding: 5px 10px 5px 10px;
    width: auto;
    margin-left: 20px;
  }

  .next-event {
    background-size: cover;
    padding-top: 20%;
    padding-bottom: 20%;
  }
}
</style>
