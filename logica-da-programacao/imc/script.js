const heightElem = document.getElementById('height');
const widthElem = document.getElementById("width");
const calc = document.getElementById('calc');
const div = document.getElementById('result')
const resultElem = document.createElement('p');

calc.onclick = function() {
  const heightValue = Number(heightElem.value);
  const widthValue = Number(widthElem.value);
  let resultType = '';
  
  if (!isNaN(heightValue) && !isNaN(widthValue)) {
    const resultValue =  (widthValue * 10000 / Math.pow(heightValue, 2)).toFixed(2);

    if (resultValue < 18.5) {
      resultType = 'Magreza'
    } else if (resultValue >= 18.50 && resultValue < 24.99) {
      resultType = 'Peso Normal';
    } else if (resultValue >= 25 && resultValue < 29.99) {
      resultType = 'Pré-Obesidade';
    } else if (resultValue >= 30 && resultValue < 34.99) {
      resultType = 'Obesidade Grau I';
    } else if (resultValue >= 35 && resultValue < 39.99) {
      resultType = 'Obesidade Grau II';
    } else {
      resultType = 'Obesidade Grau III';
    }

    resultElem.innerHTML = `Seu cálculo do IMC deu ${resultValue} e você está com ${resultType}.`;
    div.appendChild(resultElem);
  } else {
    resultType = 'Por favor, digite um valor válido!';
    resultElem.innerHTML = resultType;
    div.append(resultElem);
  }
}