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
    this.lan.push(this.lancamentos(this.cliente, this.sacar, dinheiro, this.#saldo));

  }

  depositar(dinheiro) {
    this.#saldo += dinheiro;
    this.lan.push(this.lancamentos(this.cliente, this.depositar, dinheiro, this.#saldo));
  }

  // transferir(conta, dinheiro) {
  //   if (dinheiro > this.#saldo || dinheiro > this.limite) {
  //     return 'Saldo insuficiente!';
  //   }
  //   this.sacar(dinheiro);
  //   conta.depositar(dinheiro);
  // }

  lancamentos(nome, operacao, valor, saldo) {
    if (operacao === this.depositar) {
      operacao = 'Depósito';
    } else if (operacao === this.sacar) {
      operacao = 'Saque';
    }

    const data = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    const hora = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

    return {
      cliente: nome,
      operacao: operacao,
      valor: valor,
      saldo: saldo,
      horario: `${data} ${hora}`,
    }
  }
}

class PessoaFisica extends Conta {
  constructor(cliente, conta, agencia, saldo, cpf, rg) {
    super(cliente, conta, agencia, saldo);
    this.cpf = cpf;
    this.rg = rg;
  }

  verificaCpf() {
    if (this.cpf.toString().length !== 11) {
      return 'Documento inválido!';
    }
  }
}

class PessoaJuridica extends Conta {
  constructor(cliente, conta, agencia, saldo, cnpj) {
    super(cliente, conta, agencia, saldo);
    this._cnpj = cnpj;
  }

  // verificaCnpj() {
  //   if (this._cnpj.toString().length !== 14) {
  //     return 'Documento inválido!';
  //   }
  // }

  get cnpj() {
    return this._cnpj;
  }

}

// const cpf = new PessoaFisica('Bruna', 1234, 098, 200, 12345678900);
const cnpj = new PessoaJuridica('Bruna', 1234, 098, 200, 1234567809011);

console.log();
const conta = new Conta('aaaa', 1234, 123, 400)

conta.depositar(500)
conta.depositar(500)
conta.sacar(500)
// console.log(conta.lan)

const meses = {
  janeiro: 31,
  feveiro: 28,
  março: 31,
  abril: 30,
  maio: 31,
  junho: 30,
  julho: 31,
  agosto: 31,
  setembro: 30,
  outubro: 31,
  novembro: 30,
  dezembro: 31,
}

const func = (valor, dia, mes, ano) => {
  const data = new Date();
  let mesDias = Object.values(meses);
  mesDias = mesDias[mes];
  ano = Math.abs(ano - data.getFullYear()) * 365;
  mes = Math.abs(mes - data.getMonth()) * mesDias - dia;
  dia = Math.abs(dia - data.getDate());

  const diasTotais = ano + mes + dia;
  let juros = valor * 0.025 * diasTotais;

  if (diasTotais === 1) {
    valor += valor * 0.01;
  } else if (diasTotais === 2) {
    valor += valor * 0.025;
  } else {
    valor = valor + juros;
  }
  console.log(valor);
  return valor;
}

console.log(func(500, 17, 2, 2022))

const tempo = new Date();
// console.log(tempo.getDate())
// console.log(tempo.get(), tempo.getMonth(),tempo.getDay(),);
// const teste = new Date ()
// const teste2 = new Date ()

// console.log(teste);
// console.log(teste2);


/*

class Pessoa:
  

*/
