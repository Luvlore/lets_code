/*

  Crie uma (ou mais) classe para representar um app de banco

  - Deverá ter diferenciação de clientes PJ e PF

  Pense no que deve ou não ser tratado como herança
  Pense no que deve ou não ser privado
  Pense em outras coisas que façam sentido para um app de banco e que faça consigo implementar

*/

class Conta {
  #saldo
  #documento

  constructor(cliente, conta, agencia, limite, saldo = 0, documento) {
    this.cliente = cliente;
    this.conta = conta;
    this.agencia = agencia;
    this.limite = limite;
    this.#saldo = saldo;
    this.#documento = documento;
    this.tipo = this.verificaDocumento();
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

  verificaDocumento() {
    const documentoString = this.#documento.toString().length;
    console.log();
    switch(documentoString) {
      case 14:
        this.tipo = 'PJ'
        break

      case 11:
        this.tipo = 'PF';
        break

      default:
        this.tipo = 'Documento inválido'
        break
    }

    return this.tipo;
  }
}

const conta = new Conta('Bruna', 1234567, 12345, 1000, 200, '12345678900');
const conta2 = new Conta('Teka', 1234567, 12345, 100, 20, '12345678900');


conta.sacar(50)
conta.depositar(50)
console.log(conta.saldo);

conta.transferir(conta2, 300)

console.log(conta, conta2)
