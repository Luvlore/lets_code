// Crie uma classe Restaurante com as propriedades cidade, delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o cliente esteja localizado na mesma cidade e, para isso, precisamos de um método entregaPedido que devolve como resultado se é possível realizar a entrega para um determinado cliente ou não e, em caso positiv0, o tempo estimado de entrega.
const cadastroNome = document.getElementById('cadastro-nome');
const cadastroCidade = document.getElementById('cadastro-cidade');
const btnCadastro = document.getElementById('btn-cadastro');
const restaurantes = document.getElementById('restaurantes');

class Restaurante {
  #pedidosPendentes
  #tempoEntrega

  constructor(nome, cidade) {
    this.nome = nome;
    this.cidade = cidade;
    this.delivery = true;
    this.#pedidosPendentes = 0;
    this.#tempoEntrega = 10 + 2 * this.#pedidosPendentes;
  }

  entregaPedido(cidadeCliente) {
    if (this.cidade !== cidadeCliente) {
      return `Não é possível realizar sua entrega no restaurante ${this.nome}.`;
    }

    this.#pedidosPendentes += 1;
    this.#tempoEntrega = 10 + 2 * this.#pedidosPendentes;

    return `O tempo estimado para sua entrega é de ${this.#tempoEntrega} minutos.`;
  }

  get tempoEntrega() {
    return this.#tempoEntrega;
  }
}

btnCadastro.onclick = () => {
  const restaurante = new Restaurante(cadastroNome.value, cadastroCidade.value)

  console.log(restaurante);
  cadastroNome.value = '';
  cadastroCidade.value = '';
}
