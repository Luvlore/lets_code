/*
Enunciado
Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).
*/

class CNH {
  constructor(pais, idade = 0, categoria = '') {
    this.pais = pais;
    this.idade = this.idadePadrao(idade);
    this.pais === 'BR' ? this.categoria = this.verificaCategoria(categoria) : this.verificaCategoria(categoria);
  }

  idadePadrao(idade) {
    let idadePadrao = idade;

    if (idade === 0) {
      if (this.pais === 'BR') {
        idadePadrao = 18;
      } else if (this.pais === 'US' || this.pais === 'CA') {
        idadePadrao = 16;
      } else if (this.pais === 'RU') {
        idadePadrao = 21;
      }
    }
    return idadePadrao;
  }

  verificaCategoria(categoria) {
    const categorias = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'];

    return categorias.some(cat => categoria === cat) ? categorias.find(cat => categoria === cat) : 'Categoria inválida!';
  }
}

const cnh1 = new CNH('BR');
const cnh2 = new CNH('US');
const cnh3 = new CNH('CA');
const cnh4 = new CNH('RU');
const cnh5 = new CNH('BR', 21, 'A');

console.log(cnh1);
console.log(cnh2);
console.log(cnh3);
console.log(cnh4);
console.log(cnh5);