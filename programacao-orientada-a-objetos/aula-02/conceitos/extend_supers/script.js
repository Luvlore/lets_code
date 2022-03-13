class Ave {
  constructor(cor, especie,) {
    this.cor = cor;
    this.especie = especie;
    this.teste = () => 'Olá, isso aqui é um teste';
  }
}

class Passaro extends Ave {
  constructor(cor, especie, teste, voa) {
    super(cor, especie, teste);  
    this.voa = voa;
  }
}

const ave = new Ave('branco', 'ganso');
console.log(ave);

const passaro = new Passaro('azul', 'ararinha', true);
console.log(passaro.teste());


class DataModificada extends Date {
  constructor() {
    super();
  }

  getFormatDate() {
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${this.getDate()} - ${meses[this.getMonth()]}/${this.getFullYear()}`;
  }  // adicionando um novo método com o Date
}

const teste = new DataModificada();
const teste2 = new Date();

console.log(teste.getFormatDate());
console.log(teste2.getMonth());