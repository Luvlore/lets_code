// const pessoa = {
//   nome: 'Bruna',
//   idade: 18,
//   cumprimentaPessoa(nome = 'Fulano') {
//     console.log(`Seja bem-vindo: ${nome}!`);
//   }
// }

// const mensagem = pessoa.cumprimentaPessoa('Bruna');

// /*
// C++, Java, PHP, a palavra reservada this ela é a referência a uma propriedade do objeto
// */

// const counter = {
//   count: 0,
//   next: function () {
//     this.count += 1;
//   },
// }

// counter.next();
// counter.next();
// counter.next();
// counter.next();

// console.log(counter.count);

// // const show = () => console.log(this === window); // true
// // show()

// // Invocação de método
// // Quando eu chama o método do objeto, o JS aponta o THINS para o objeto que possui método

// const carro = {
//   marca: 5,
//   getMarca: function () {
//     return typeof this.marca;
//   }
// }

// const carro2 = {
//   marca: 'Fiat',
// }

// const marca = carro.getMarca();
// console.log(marca);

// const marca1 = carro.getMarca.bind(carro2);
// console.log(marca1());

// Chamada de construtor

class Carro {
  constructor(placa, marca) {
    this.placa = placa;
    this.marca = marca;
  }
  // Criar uma função dentro da função construtora Carro
  getPlaca() {
    return this.placa;
  }
  getMarca() {
    return this.marca;
  }
}



const carro = new Carro('E234LM', 'BMW');

console.log(carro);
console.log(carro.getPlaca());
console.log(carro.getMarca());


class Carro2 {
  constructor(marca) {
    if (!(this instanceof Carro2)) {
      throw Error('Use o operador new para instanciar o objeto.');
    }
    this.marca = marca;
  }
}

const bmw1 = new Carro2('BMW');
console.log(bmw1);
// const bmw2 = Carro2('BMW');
// console.log(bmw2);

class Carro3 {
  constructor(marca) {
    if (!new.target) {
      throw Error('Use o operador new para instanciar o objeto.');
    }
    this.marca = marca;
  }
}

const teste = new Carro3('teste');
