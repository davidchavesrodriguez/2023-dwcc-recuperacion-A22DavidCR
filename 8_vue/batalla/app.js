const app = Vue.createApp({
  data() {
    return {
      vidaMonstro: 100,
      vidaXogador: 100,
    };
  },
  methods: {
    randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    },
    mostrarVidaMonstro() {
      alert(`O monstro ten ${this.vidaMonstro} puntos de vida`);
    },
    mostrarVidaXogador() {
      alert(`Tes ${this.vidaMonstro} puntos de vida`);
    },
    ataque() {
      this.vidaMonstro -= this.randomNumber(8, 15);
    },
  },
});
app.mount("#game");
