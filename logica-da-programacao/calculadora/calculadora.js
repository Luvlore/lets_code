let num1 = document.getElementById('first-number');

let num2 = document.getElementById('second-number');

let button = document.getElementById('button');
button.addEventListener('click', function() {
    let soma = parseInt(num1.value) + parseInt(num2.value);
    resultado = document.getElementById('resultado');
    resultado.innerText = soma;
})