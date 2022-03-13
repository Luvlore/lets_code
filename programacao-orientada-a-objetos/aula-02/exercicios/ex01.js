/* QUESTÃO 2
Enunciado
  Crie um objeto do tipo curso que tenha os seguintes atributos:

    nome
    p1
    p2
    media
    
  Usando o setter insira o nome do curso, p1 e p2. Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

  Crie um get que retorne uma mensagem informando o nome do curso e sua média.
*/

const curso = {
  _nome: '',
  p1: 5,
  p2: 10,

  get nome() {
    return this._nome;
  },

  set nome(nome) {
    this._nome = nome;
  },

  _media: () => ( curso.p1 + curso.p2 ) / 2,

  get media() {
    return curso.p1 === 0 ? 'A nota P1 foi 0, não vai ser possível fazer uma média.' :  `Curso: ${this.nome}\nMédia: ${this._media()}`
  },
};

curso.nome = 'P.O.O.';

console.log(curso.media);