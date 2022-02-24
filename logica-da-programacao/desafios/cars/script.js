const names = document.getElementById('names');
const btn = document.getElementById('btn');
const num = document.getElementById('num');
const cars = document.getElementById('cars');
const nameArray = [];

btn.onclick = function () {
  const name = names.value;
  if (name === '') {
    alert('Campo inválido!');
  } else {
    nameArray.push(name);
    num.innerHTML = nameArray.length;
  
    if (nameArray === 10) {
      for (let car of nameArray) {
        const carsNames = document.createElement('li');
        carsNames.innerHTML = car;
        cars.appendChild(carsNames);
      }
    } else if (nameArray.length > 10) {
      const carsNames = document.createElement('li');
      carsNames.innerHTML = nameArray[count - 1];
      cars.appendChild(carsNames);
    }

    names.value = '';
  }
}
