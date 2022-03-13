class Pessoa {
  constructor(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  toString = () => {
    return `Nome: ${this.nome}\nIdade: ${this.idade}\nEmail: ${this.email}`;
  }
}


const pessoa1 = new Pessoa('Bruna', 18, 'bruna@bruna.com');

console.log(pessoa1.toString());

/*
class Pessoa:
  def __init__(self, nome, idade, email):
    self.__nome = nome
    self.__idade = idade
    self.__email = email

  def __str__(self):
    return f'Nome: {this.nome}\nIdade: {this.idade}\nEmail: {this.email}'

pessoa1 = Pessoa('Bruna', 18, 'bruna@bruna.com')
print(pessoa1)
*/