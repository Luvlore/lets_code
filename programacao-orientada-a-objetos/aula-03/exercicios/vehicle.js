// Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo. 

class Veiculo {
  constructor(rodas = 1, usaCombustível = false) {
    this.rodas = rodas;
    this.usaCombustível = usaCombustível;
  }
}

class Carro extends Veiculo {
  constructor(tipoDeCombustivel, rodas = 4, usaCombustível = true) {
    super(rodas, usaCombustível);
    this.tipoDeCombustivel = tipoDeCombustivel;
  }
}

class Bicicleta extends Veiculo {
  constructor(infantil, rodas = 2, usaCombustível) {
    super(rodas, usaCombustível);
    this.infantil = infantil
  }
}

const carro1 = new Carro('gasolina');
console.log(carro1);

const bicicleta1 = new Bicicleta(true);
console.log(bicicleta1);
