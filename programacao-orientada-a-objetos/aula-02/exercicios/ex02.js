/* QUESTÃO 2
Enunciado
Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
*/
const tv = {
  canal: 'Canal 1',
  volume: 50,
  ligada: false,

  liga() {
    this.ligada = true;
  },

  desliga() {
    this.ligada = false;
  },

  mudaDeCanal(canal) {
    this.canal = canal;
  },

  aumentaVolume(volume = 1) {
    this.volume += volume;
  },

  diminuiVolume(volume = 1) {
    this.volume -= volume;
  },

  info() {
    return `Canal: ${this.canal}\nVolume: ${this.volume}\nLigada: ${this.ligada}\n`;
  }
};

console.log(tv.info());

tv.liga();

console.log(tv.info());

tv.aumentaVolume();
tv.aumentaVolume(5);
tv.aumentaVolume(10);
tv.aumentaVolume();

console.log(tv.info());

tv.diminuiVolume();
tv.diminuiVolume(12);
tv.diminuiVolume(3);
tv.diminuiVolume(10);

console.log(tv.info());

tv.mudaDeCanal('Canal 2');

console.log(tv.info());

tv.desliga();

console.log(tv.info());
