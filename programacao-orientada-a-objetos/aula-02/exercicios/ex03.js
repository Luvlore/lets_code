/* QUESTÃO 3
Enunciado
Refaça o exercício da TV utilizando uma função construtora

Refaça o exercício da TV utilizando a sintaxe de classe (class).
*/

class Tv {
  constructor(canal, volume, ligada = false) {
    this.canal = canal;
    this.volume = volume;
    this.ligada = ligada;
  }

  liga() {
    this.ligada = true;
  }

  desliga() {
    this.ligada = false;
  }

  mudaDeCanal(canal) {
    this.canal = canal;
  }

  aumentaVolume(volume = 1) {
    this.volume += volume;
  }

  diminuiVolume(volume = 1) {
    this.volume -= volume;
  }

  info() {
    return `Canal: ${this.canal}\nVolume: ${this.volume}\nLigada: ${this.ligada}\n`;
  }
};

const tv = new Tv('Canal 1', 50);

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
