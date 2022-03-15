// Crie uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia um número que corresponderá ao número de inscrição do participante e declara o vencedor. 

class Sorteio {
  constructor(participantes) {
    this.participantes = participantes;
  }

  sorteiaNumero() {
    const ganhadores = [];

    for (let i = 0; i < this.participantes; i += 1) {
      let ganhador = Math.floor(Math.random() * this.participantes + 1);
      ganhadores.push(ganhador);
    }

    return ganhadores.filter((numero, index) => ganhadores.indexOf(numero) === index);
  }

  preencheZero(numero) {
    const caractere = this.participantes.toString().length;
    return ('0'.repeat(caractere - 1) + numero).slice(-caractere);
  }

  ganhador() {
    return this.sorteiaNumero().reduce((acc, win, ind, arr) => ind === arr.length - 1 ?
      `${acc}O número ganhador é: ${this.preencheZero(win)}!` :
      `${acc}O número ganhador é: ${this.preencheZero(win)}!\n`, '');
  }
}

const sorteio = new Sorteio(10);
console.log(sorteio.ganhador());
