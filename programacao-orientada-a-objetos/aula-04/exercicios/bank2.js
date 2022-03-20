class Conta {

  constructor(cliente, conta, agencia, saldo = 0) {
    this.cliente = cliente;
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
    this.lan = [];
    this.juros = 0;
  }
  
  lancamentos(nome, operacao, valor) {
    const data = `${new Date().getDate()}/${('0' + (new Date().getMonth() + 1)).slice(-2)}/${new Date().getFullYear()}`; // DD/MM/AA
    const hora = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`; // HH/MM/SS

    this.lan.push({
      cliente: nome,
      operacao: operacao,
      valor: `R$${valor.toFixed(2)}`,
      saldo: `R$${this.saldo}`,
      horario: `${data} ${hora}`,
    })
  }

  leasing(data, valor, accept = false) {
    if (accept) {
      const dataPag = new Date();
      const dias = Math.abs(new Date(data) - dataPag.getTime());
      const diasCorridos = Math.ceil(dias / (1000 * 3600 * 24)) - 1;
      const jurosTotais = Math.pow((1 + this.juros), diasCorridos);
      const montante = valor * jurosTotais;

      this.saldo -= montante;
      this.saldo = this.saldo.toFixed(2);
      this.lancamentos(this.cliente, 'Cheque Especial', valor);

      return {
        saldoNegativo: `R$ ${this.saldo}`,
        jurosDia: this.juros * 100 + '%',
        data: `${dataPag.getDate()}/${dataPag.getMonth()}/${dataPag.getFullYear()} ${dataPag.getHours()}:${dataPag.getMinutes()}:${dataPag.getSeconds()}`,
        jurosAcc: jurosTotais.toFixed(2) + '%',
      }
    }
  }

  sacar(valor, tipo='Saque') {
    try {
      if (valor > this.saldo) {
        throw new Error('Saldo insuficiente!');
      }

      this.saldo = Number(this.saldo) - valor;

      this.lancamentos(this.cliente, tipo, valor);
    } catch(e) {
      console.log(e.message);
      return this.leasing('Mar 28, 2022', valor, true);
    }
  }

  depositar(valor) {
    this.saldo = Number(this.saldo) + valor;
    this.lancamentos(this.cliente, 'Depósito', valor);
  }

  transferir(destino, valor) {
    try {
      this.sacar(valor, 'Tranferência');
      destino.depositar(valor);
    } catch(e) {
      console.log(e.message);
      return this.leasing('Mar 26, 2022', valor, true);
    }
  }

  pag(vencimento, valor) {
    const tempoVencimento = new Date(vencimento).getTime() - new Date().getTime();
    const diasVencimento = Math.ceil(tempoVencimento / (1000 * 3600 * 24)) - 1;
    if (diasVencimento < 0) {
      if (diasVencimento === 1) {
        valor += valor * 0.01;
      } else if (diasVencimento === 2) {
        valor += valor * 0.025;
      } else {
        valor *= (1 + 0.025) ** diasVencimento;
      }
    }

    try {
      this.sacar(valor, 'Pagamento');
      return 'Pagamento efetuado com sucesso!';
    } catch (e) {
      console.log(e.message)
      return this.leasing('Mar 26, 2022', valor, true);
    }
  }
}

class PessoaFisica extends Conta {
  #cpf
  #rg

  constructor(cliente, conta, agencia, saldo, cpf, rg) {
    super(cliente, conta, agencia, saldo);
    this.juros = 0.005;
    this.cpf = cpf;
    this.rg = rg;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    this.#cpf = cpf;
  }

  get rg() {
    return this.#rg;
  }

  set rg(rg) {
    this.#rg = rg;
  }
}

class PessoaJuridica extends Conta {
  #cnpj

  constructor(cliente, conta, agencia, saldo, cnpj) {
    super(cliente, conta, agencia, saldo);
    this.juros = 0.01;
    this.#cnpj = cnpj;
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(cnpj) {
    this.#cnpj = cnpj;
  }
}

const conta = new PessoaFisica('Fulano de Tal', 1234, 123, 400, 12345678900)
const conta2 = new PessoaJuridica('Ciclano de Tal', 1234, 123, 400, 12345678900)

console.log(conta.sacar(500));
conta.depositar(1000);
conta.transferir(conta2, 500);
conta.sacar(50);
console.log(conta.lan);
console.log(conta2.lan);
