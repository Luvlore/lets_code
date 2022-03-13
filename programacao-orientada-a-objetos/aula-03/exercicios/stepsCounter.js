// Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

class SmartWacth {
  #steps

  constructor() {
    this.#steps = 0;
  }

  get steps() {
    return this.#steps;
  }

  set steps(steps) {
    this.#steps += steps;
  }

  resetOnMidnight() {
    this.#steps = 0;
  }
}

const steps = new SmartWacth();

console.log(steps.steps);

steps.steps = 10;

console.log(steps.steps);

steps.steps = 20;
steps.steps = 5;
steps.steps = 100;
steps.steps = 143;

console.log(steps.steps);

steps.resetOnMidnight();

console.log(steps.steps);
