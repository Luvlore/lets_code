/* QUESTÃO 3
Enunciado
Crie uma função construtora, para criar um "Aluno".

Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o curso do aluno através do prototype da função.

Invoque a função e printe o resultado
*/

function Aluno(nome, idade, email, matricula) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
};

Aluno.prototype.setCurso = function (curso) {
  this.curso = curso;
};


const aluno1 = new Aluno('Bruna', 18, 'bruna@bruna.com', 12345);
const aluno2 = new Aluno('Batata', 54, 'batata@batata.com', 54321);

console.log(aluno1);
aluno1.setCurso('POO')
console.log(aluno1);

console.log(aluno2);
aluno2.setCurso('Web Development');
console.log((aluno2));