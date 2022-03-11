/* QUESTÃO 2
Enunciado
Crie um objeto de nome Ave e adicione um atributo de nome espécie.

Dentro do objeto Ave crie uma função, que retorno o atributo espécie.

Retorne o objeto invocando a função criada.

Após o retorno do objeto invocando a função, crie um objeto de nome Peixe e através do bind faça ele retornar a espécie do objeto peixe.
*/

const ave = {
  _cor: 'branco',
  _especie: 'ganso',

  especie: function () {
    return this._especie;
  }
};


console.log(ave.especie());

const peixe = {
  _especie: 'salmão',
};

console.log(ave.especie.bind(peixe)());
