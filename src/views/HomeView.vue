<template>
  <Header />
  <section class="back-section">
    <figure class="back-left1">
      <img src="@/assets/img/karts.jpg" />
    </figure>
    <div class="back-right1">
      <h2>Confira os resultados recentes e anteriores</h2>
      <span>{{ description[0] }}</span>
    </div>
    <div class="back-left2">
      <h2>Todas as informações na palma da sua mão</h2>
      <span>{{ description[1] }}</span>
    </div>
    <figure class="back-right2">
      <img src="@/assets/img/karts.jpg" />
    </figure>
  </section>

  <section class="back-terminal" id="download">
    <div class="terminal-left">
      <div class="terminal-left-title">
        <img src="@/assets/img/icon-park_terminal.png" />
        <h1>Prefere um terminal?</h1>
      </div>
      <span
        >Experimente nossa aplicação CLI(Command Line Interface), escrita em C e
        Python, visando a performance de uso.</span
      >
      <div class="terminal-imgs">
        <img src="@/assets/img/langC.png" />
        <img src="@/assets/img/langPy.png" />
      </div>
      <div>
        <RouterLink to="/downloads" class="download-link">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-cloud-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
              />
              <path
                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
              />
            </svg>
            <span>Download</span>
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="terminal-right">
      <img src="@/assets/img/notebook.png" />
    </div>
  </section>
</template>
<style scoped>
.download-link {
  color: #fff;
  text-decoration: none;
  width: auto;
}

.back-section {
  margin: 0 auto;
  padding: 2%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
}
.back-left1 {
  display: flex;
  justify-content: center;
}

.back-left1 > img {
  width: 400px;
}

.back-right1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.back-right1 > h2 {
  font-size: 2rem;
  text-align: center;
  width: 70%;
}
.back-right1 > span {
  width: 70%;
  text-align: right;
  padding-top: 15px;
}

.back-left2 {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.back-left2 > h2 {
  font-size: 2rem;
  text-align: center;
  width: 70%;
}

.back-left2 > span {
  width: 70%;
  text-align: left;
  padding-top: 15px;
}

.back-right2 {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.back-right2 > img {
  width: 400px;
}

.back-terminal {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  background-color: var(--color-dark-blue);
}

.terminal-left {
  padding: 2% 0 2% 15%;
}

.terminal-left-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.terminal-left-title > h1 {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 500;
}

.terminal-left-title > img {
  width: 50px;
}

.terminal-left > span {
  margin-top: 15px;
  display: flex;
  color: #cccccc;
  font-size: 1.1rem;
  font-weight: 300;
  width: 60%;
}

.terminal-imgs {
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.terminal-imgs > img {
  width: 80px;
}

.download-link > button {
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--color-light-green);
  border: none;
  text-align: left;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 100;
  font-size: 2rem;
  gap: 10px;
  padding: 2% 10% 2% 5%;
}

.download-link > button > span {
  font-size: 2rem !important;
  font-weight: 300 !important;
}

.terminal-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.terminal-right > img {
  width: 400px;
}

@media screen and (max-width: 767px) {
  .back-section {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }

  .back-right1 {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
  }

  .back-right1 > h2 {
    width: auto;
    margin: 5% 5% 0 5%;
  }
  .back-right1 > span {
    width: auto;
    text-align: justify;
    margin: 0 5% 0 5%;
  }

  .back-left1 {
    margin-top: 20px;
  }

  .back-left2 {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  .back-left2 > h2 {
    width: auto;
    margin: 0 5% 0 5%;
  }

  .back-left2 > span {
    width: auto;
    text-align: justify;
    margin: 0 5% 0 5%;
  }

  .back-right2 {
    padding-bottom: 10%;
  }

  .back-terminal {
    padding: 10% 0 10% 0;
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }

  .terminal-left {
    display: grid;
    justify-items: center;
    padding: 2% 0 5% 0;
  }

  .terminal-left-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
  }

  .terminal-left-title > h1 {
    text-align: justify;
    margin-right: 5%;
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 500;
  }

  .terminal-left-title > img {
    margin-left: 5%;
    width: 50px;
  }

  .terminal-left > span {
    width: auto;
    margin: 8% 5% 0 5%;
    text-align: justify;
  }

  .terminal-imgs {
    padding-top: 10%;
  }

  .terminal-left > a > button {
    margin-top: 50px;
    padding: 5% 15% 5% 10%;
  }

  .terminal-right {
    padding-top: 50px;
  }

  .terminal-right > img {
    width: 400px;
  }
}
</style>
<script>
import Header from "../components/Header.vue";

export default {
  data() {
    return {
      description: [
        "Com nosso novíssimo sistema WEB agora os resultados estão mais próximos do que nunca! Tenha na palma de suas mãos os resultados de edições anteriores e atual. Tecnologia é informação e segurança, principalmente na nossa ladeira!",
        "Caso queira saber informações referente a corrida, ladeira e demais informações, basta subir a página e clicar no botão de 'Saiba mais'. Em caso de informações específicas, descer até o rodapé e entrar em contato por email!",
        ],
    };
  },
  components: { Header },
};
</script>
