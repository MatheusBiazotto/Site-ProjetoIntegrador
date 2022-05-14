<template>
  <MainMenu />
  <section>
    <div class="next-event">
      <h2>Próximo evento em:</h2>
      <h2 id="conta-tempo"></h2>
    </div>
  </section>

  <div class="main-card card-padding" v-for="ano in years" :key="ano">
    <div v-show="data.length === 0">
      <h4>Não foram encontrados dados! :c</h4>
    </div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
          <path
            fill-rule="evenodd"
            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
        <span>{{ filterByYear(data, ano).length }}</span>
      </div>

      <span>Clique em uma equipe para visualizar mais informações!</span>
    </div>
    <div
      class="card-padding"
      v-for="item in filterByYear(data, ano)"
      :key="item.id"
    >
      <!-- Aqui começa a listar as equipes -->
      <div class="card-list-teams">
        <img
          v-if="item.position == 1"
          v-show="item.position >= 1 && item.position <= 3"
          src="@/assets/img/first_pos.png"
          alt="Primeiro lugar"
        />
        <img
          v-if="item.position == 2"
          v-show="item.position >= 1 && item.position <= 3"
          src="@/assets/img/sec_pos.png"
          alt="Segundo lugar"
        />
        <img
          v-if="item.position == 3"
          v-show="item.position >= 1 && item.position <= 3"
          src="@/assets/img/thrd_pos.png"
          alt="Terceiro lugar"
        />
        <div class="card-teams-info">
          <h4 v-if="item.position > 3">
            {{ `${item.position}° - ${item.name}` }}
          </h4>
          <h4 v-else>{{ item.name }}</h4>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock-history"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
              />
              <path
                d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
              />
              <path
                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <span v-if="item.seconds[0] < 10 && item.miliseconds[0] < 10">{{ `${item.minutes[0]}:0${item.seconds[0]}` }}</span>
            <span v-else>{{ `${item.minutes[0]}:${item.seconds[0]}` }}</span>
          </div>
          <span>Fulano, Ciclano, Ucraniano</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";

export default {
  name: "RacesView",
  data() {
    return {
      data: [],
      years: [],
      indexYear: 0,
      qtdYear: [],
      prox: 0,
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
        var fim = new Date("05/21/2022 10:00:00");

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
  },
};
</script>

<style>
body {
  background-color: #e6e6e6;
}

.next-event {
  background-image: url("@/assets/img/next_event.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 8px 5px 10px #0000004f;
  width: 100%;
  padding-top: 4%;
  padding-bottom: 5%;
  text-align: center;
}

.next-event > h2 {
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

.card-year > h2 {
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

.card-column-hrs > hr {
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

.card-more-info > span {
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

.card-more-info-teams > span {
  font-size: 1.5rem;
  font-weight: 300;
}

.card-more-info-teams > svg {
  color: var(--color-dark-blue);
}

.card-more-info-date {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.card-more-info-date > span {
  font-size: 1.5rem;
  font-weight: 300;
}

.card-more-info-date > svg {
  color: var(--color-light-green);
}

.card-list-teams {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card-teams-info {
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}

.card-teams-info > h4 {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-teams-info > div > svg {
  color: var(--color-red);
  font-weight: 100;
  margin-right: 10px;
}

.card-teams-info > div > span {
  font-size: 1rem;
  font-weight: 300;
}

.card-teams-info > span {
  color: #666666;
  font-size: 0.9rem;
  font-weight: 400;
}

@media screen and (max-width: 767px) {
  .main-card {
    margin-left: 5%;
    margin-right: 5%;
  }

  .card-column-hrs > hr {
    width: 30vw;
  }

  .card-more-info > span {
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
