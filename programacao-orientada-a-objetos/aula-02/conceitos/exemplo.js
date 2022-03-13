/*
Construa um objeto do tipo Carro que contenha os seguintes atributos: 
  - cor
  - marca

Insira a cor do carro utilizando getter e setter;
Insira a marca do carro utilizando getter e setter;

Crie um get que retorne uma mensagem informando a marca e a cor do carro.
*/

const car = {
  get color() {
    return this._color;
  },

  set color(color) {
    this._color = color;
  },

  get brand() {
    return this._brand;
  },

  set brand(brand) {
    this._brand = brand;
  },

  get describe() {
    return `Cor: ${this.color}\nMarca: ${this.brand}`
  },
};

car.color = 'vermelho';
car.brand =  'Fiat';

console.log(car.color);
console.log(car.brand);
console.log(car.describe);
