const ageElement = document.getElementById('age');
const button = document.getElementById('button');
const result = document.getElementById('result')

function ageGroup() {
  const ageValue = Number(ageElement.value);
  
  if (ageValue < 13 && ageValue > 0) {
    result.value = 'Você é uma criança.';
  } else if (ageValue >= 13 && ageValue < 18) {
    result.value = 'Você é um adolescente.';
  } else if (ageValue >= 18 && ageValue < 65) {
    result.value = 'Você é um adulto.';
  } else if (isNaN(ageValue) || ageValue < 0) {
    result.value = 'Digite um valor válido!';
  } else {
    result.value = 'Você é um idoso.';
  }

  ageElement.value = '';
}

function clear() {
  result.value = '';
}

button.onclick = ageGroup;
ageElement.onfocus = clear;