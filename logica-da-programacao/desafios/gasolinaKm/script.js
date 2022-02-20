// Paulo quer fazer entregas com seu carro e precisa saber se vale a pena de acordo com o custo.
// Seu carro possui um taque de 40 litros de gasolina.
// O carro faz 12km/L de gasolina em media
// A distancia entre sua casa e o local onde retira as encomendas eh de 10km.
// As entregas em media variam entre 5 e 15km de distancia do centro de distribuicao.
// ele vai receber entre 5 e 10 encomendas por dia para entregar.
// A valor da gasolina esta R$ 5,50
// Dado essas condicoes faca um programa que calcule o gasto me

const days = document.getElementById('days');
const btnAdd = document.getElementById('button');
const container = document.getElementById("container");
const btnReset = document.getElementById('reset');
const resultDiv = document.getElementById("result");
const gas = 5.5;

function createDays() {
  const daysValue = Number(days.value);

  if (daysValue != '') {
    let day = 0;
    let sumKm = 0;
    let counter = 0;
    let order = 0;
    
    for (let i = 0; i < daysValue; i += 1) {
      let dayKm = 0;
      dayKm += 20;
      day = i + 1;
      
      const orderDay = Math.floor(Math.random() * 6 + 5);
      order += orderDay;
      
      for (let index = 0; index < orderDay; index += 1) {
        const km = Math.floor(Math.random() * 11 + 5);
        dayKm += km;
      }      

      sumKm += dayKm;
      
      const createDiv = document.createElement('div');
      createDiv.classList.add('day-list')
  
      const dayTitle = document.createElement('h2');
      dayTitle.classList.add('title');
      dayTitle.innerHTML = `Dia ${day}`;
      createDiv.appendChild(dayTitle);
      
      const dayElem = document.createElement('ul');
      dayElem.classList.add('list');
      dayElem.innerHTML = `<li>Quilometragem do dia: ${dayKm}km</li>
                           <li>Entregas do dia: ${orderDay}`;
      createDiv.appendChild(dayElem);

      container.append(createDiv)
    }

    const result = document.createElement('p');
    result.classList.add('result')

    counter = Math.trunc(sumKm / 12 / 40);
    const spent = counter * (gas * 40);
    result.innerHTML = `Em ${days.value} dias:
                      <ul>
                        <li>Gasolina: R$${spent.toFixed(2)}.</li>
                        <li>Entregas: ${order}.</li>
                        <li>Quilometros rodados: ${sumKm}km.</li>
                        <li>Tanque reabastecido ${counter} vezes.</li>
                       </ul>`;
    resultDiv.appendChild(result);

    days.value = '';
  }
}

function clear() {
  container.innerHTML = '';
  resultDiv.innerHTML = '';
}

btnAdd.onclick = createDays;
btnReset.onclick = clear;
