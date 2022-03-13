const variavel = {
  valor: 0,
  conversor: '',

  get moeda() {
    console.log('to na moeda');
    return `R$ ${this.valor.toFixed(2).replace('.',',')}`;
  },

  get int() {
    console.log('to no get');
    return this.valor;
  },

  set int(value) {
    console.log('to no set');
    this.valor = value;
  },

  get conversao() {
    if(this.conversor === 'peso') {
      return 0.046 * this.valor;
    };
  },

}


variavel.int = 150;
variavel.conversor = 'peso';

console.log(variavel.moeda);
console.log(variavel.int);
console.log(variavel.conversao);