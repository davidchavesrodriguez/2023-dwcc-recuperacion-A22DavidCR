const app = Vue.createApp({
  data() {
    return {
      vidaMonstro: 100,
      vidaXogador: 100,
      contadorEspecial: 0,
      disabled: true,
      isPlaying: true,
      victoria: false,
      derrota: false,
      empate: false,
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
      this.vidaMonstro -= this.randomNumber(5, 12);
      this.finalTurno();
    },
    especial() {
      this.vidaMonstro -= this.randomNumber(10, 25);
      this.finalTurno();
    },
    curacion() {
      this.vidaXogador += this.randomNumber(8, 20);
      this.finalTurno();
    },
    finalTurno() {
      this.vidaXogador -= this.randomNumber(8, 15);
      this.contadorEspecial += 1;
      if (this.contadorEspecial == 3) {
        this.disabled = false;
      }
      if (this.contadorEspecial == 4) {
        this.disabled = true;
        this.contadorEspecial = 0;
      }
      if (this.vidaXogador > 100) {
        this.vidaXogador = 100;
      }
      // victoria
      if (this.vidaMonstro < 0 && this.vidaXogador > 0) {
        this.vidaMonstro = 0;
        this.isPlaying = false;
        this.victoria = true;
      }
      // derrota
      if (this.vidaXogador < 0 && this.vidaMonstro > 0) {
        this.vidaXogador = 0;
        this.isPlaying = false;
        this.derrota = true;
      }
      // empate
      if (this.vidaXogador < 0 && this.vidaMonstro < 0) {
        this.vidaXogador = 0;
        this.vidaMonstro = 0;
        this.isPlaying = false;
        this.empate = true;
      }
    },
    xogoNovo() {
      this.vidaMonstro = 100;
      this.vidaXogador = 100;
      this.contadorEspecial = 0;
      this.disabled = true;
      this.isPlaying = true;
      this.victoria = false;
      this.derrota = false;
      this.empate = false;
    },
  },
});
app.mount("#game");
