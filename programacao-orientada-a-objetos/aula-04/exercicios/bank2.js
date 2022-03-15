/*

  Crie uma (ou mais) classe para representar um app de banco

  - Deverá ter diferenciação de clientes PJ e PF

  Pense no que deve ou não ser tratado como herança
  Pense no que deve ou não ser privado
  Pense em outras coisas que façam sentido para um app de banco e que faça consigo implementar

*/

class Conta {
  #saldo

  constructor(cliente, conta, agencia, limite, saldo = 0) {
    this.cliente = cliente;
    this.conta = conta;
    this.agencia = agencia;
    this.limite = limite;
    this.#saldo = saldo;
  }

  get saldo() {
    return this.#saldo;
  }

  sacar(dinheiro) {
    if (dinheiro > this.#saldo || dinheiro > this.limite) {
      return 'Saldo insuficiente!';
    }
    this.#saldo -= dinheiro;
  }

  depositar(dinheiro) {
    if (dinheiro > this.limite) {
      return 'Limite excedido!';
    }
    this.#saldo += dinheiro;
  }

  transferir(conta, dinheiro) {
    if (dinheiro > this.#saldo || dinheiro > this.limite) {
      return 'Saldo insuficiente!';
    }
    this.sacar(dinheiro);
    conta.depositar(dinheiro);
  }
}

class PessoaFisica extends Conta {
  constructor(cliente, conta, agencia, saldo, cpf, limite) {
    super(cliente, conta, agencia, limite = 2000, saldo);
    this.cpf = cpf;
  }

  verificaCpf() {
    if (this.cpf.toString().length !== 14) {
      return 'Documento inválido!';
    }
  }
}

class PessoaJuridica extends Conta {
  constructor(cliente, conta, agencia, saldo, cnpj, limite) {
    super(cliente, conta, agencia, limite = 2000, saldo);
    this.cnpj = cnpj;
  }

  verificaCnpj() {
    if (this.cnpj.toString().length !== 14) {
      return 'Documento inválido!';
    }
  }
}

const cpf = new PessoaFisica('Bruna', 1234, 098, 200, 12345678900);

cpf.sacar(20);
console.log(cpf.limite);
