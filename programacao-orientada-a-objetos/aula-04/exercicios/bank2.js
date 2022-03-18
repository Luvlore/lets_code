/*

  Crie uma (ou mais) classe para representar um app de banco

  - Deverá ter diferenciação de clientes PJ e PF

  Pense no que deve ou não ser tratado como herança
  Pense no que deve ou não ser privado
  Pense em outras coisas que façam sentido para um app de banco e que faça consigo implementar


  No cliente pessoa física, criar um método
  onde retorna os dados de rg e cpf.
  No cliente pessoa juridica, criar um método
  onde retorna os dados do cnpj

  Utilize o conceito de Polimorfismo para execução da solicitação acima


  Crie uma Objeto Lançamentos 
  e para cada operação de saque ou depósito
  Insira os seguintes registros nessa objeto:
    - Nome do Cliente
    - Tipo da Operação (se foi saque ou se foi depósito)
    - Valor
    - Horario da Transação
  Considerando o conceito de encapsulamento
  deixe o saldo bancário do cliente inacessível fora do escopo de conta.
  Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.

  Crie um método que calcule o juros de atraso 
  de um determinado pgto, onde tenha as seguintes regras: 
  - Atraso de 1 dia juros de 1%
  - Atraso de 2 dias juros 2.5 % 
  - Atraso de 3 dias ou mais, juros composto 
 */


class Conta {
  #saldo

  constructor(cliente, conta, agencia, saldo = 0) {
    this.cliente = cliente;
    this.conta = conta;
    this.agencia = agencia;
    this.#saldo = saldo;
    this.lan = []
  }

  sacar(dinheiro) {
    if (dinheiro > this.#saldo) {
      return 'Saldo insuficiente!';
    }
    this.#saldo -= dinheiro;

    const tipo = 'Saque';
    this.lan.push(this.lancamentos(this.cliente, tipo, dinheiro, this.#saldo));

  }

  depositar(dinheiro) {
    this.#saldo += dinheiro;

    const tipo = 'Depósito';
    this.lan.push(this.lancamentos(this.cliente, tipo, dinheiro, this.#saldo));
  }

  // transferir(conta, dinheiro) {
  //   if (dinheiro > this.#saldo || dinheiro > this.limite) {
  //     return 'Saldo insuficiente!';
  //   }
  //   this.sacar(dinheiro);
  //   conta.depositar(dinheiro);
  // }

  lancamentos(nome, operacao, valor, saldo) {
    const data = `${new Date().getDate()}/${('0' + (new Date().getMonth() + 1)).slice(-2)}/${new Date().getFullYear()}`; // DD/MM/AA
    const hora = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`; // HH/MM/SS

    return {
      cliente: nome,
      operacao: operacao,
      valor: `R$${valor.toFixed(2)}`,
      saldo: `R$${saldo.toFixed(2)}`,
      horario: `${data} ${hora}`,
    }
  }

  pag(vencimento, pagamento) {
    const data1 = new Date(vencimento);
    const data2 = new Date();
    const tempoVencimento = data1.getTime() - data2.getTime();
    let diasVencimento = Math.ceil(tempoVencimento / (1000 * 3600 * 24)) - 1;


    if (diasVencimento < 0) {
      if (diasVencimento === 1) {
        pagamento += pagamento * 0.01;
      } else if (diasVencimento === 2) {
        pagamento += pagamento * 0.025;
      } else {
        pagamento += (1 + 0.025) ** diasVencimento;
      }

      return `O valor que você deve pagar é R$${pagamento.toFixed(2)}, seu boleto está ${Math.abs(diasVencimento)} dias atrasados.`;
    }


    try {
      if (pagamento > this.#saldo) {
        throw new Error('Saldo insuficiente!')
      }

      this.#saldo -= pagamento;
      return `O valor que você deve pagar é R$${pagamento.toFixed(2)}.`

    } catch (e) {
      return e.message;
    }
  }
}

class PessoaFisica extends Conta {
  constructor(cliente, conta, agencia, saldo, cpf, rg) {
    super(cliente, conta, agencia, saldo);
    this.cpf = cpf;
    this.rg = rg;
  }
}

class PessoaJuridica extends Conta {
  constructor(cliente, conta, agencia, saldo, cnpj) {
    super(cliente, conta, agencia, saldo);
    this._cnpj = cnpj;
  }

  get cnpj() {
    return this._cnpj;
  }

}

// const cpf = new PessoaFisica('Bruna', 1234, 098, 200, 12345678900);
// const cnpj = new PessoaJuridica('Bruna', 1234, 098, 200, 1234567809011);

const conta = new Conta('Fulano de Tal', 1234, 123, 400)

conta.depositar(500)
conta.depositar(500)
conta.sacar(500)
console.log(conta.lan)
console.log(conta.pag('04/12/2022', 1500))
