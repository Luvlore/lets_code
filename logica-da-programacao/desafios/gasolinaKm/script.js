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
        dayKm += km * 2;
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
                           <li>Entregas do dia: ${('0' + orderDay).slice(-2)}`;
      createDiv.appendChild(dayElem);

      container.append(createDiv);
    }

    counter = Math.trunc(sumKm / 12 / 40);
    const result = document.createElement('p');
    result.classList.add('result')

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
