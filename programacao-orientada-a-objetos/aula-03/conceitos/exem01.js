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
    console.log(ganhadores);
    
    return ganhadores.filter((numero, index) => ganhadores.indexOf(numero) === index);
  }

  ganhador() {
    return this.sorteiaNumero().map(ganhador => `O número ganhador é: ${ganhador}!`)
  }

}

const sorteio = new Sorteio(10);
console.log(sorteio.ganhador());
