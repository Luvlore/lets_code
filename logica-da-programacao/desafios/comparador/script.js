const result = document.getElementById('result');
const button = document.getElementById('button');
const selectElem = document.getElementById('select');
let selectValue = selectElem.value;

function selectItem() {
    const value = selectElem.value;
    selectValue = value;
}

function toCompare() {
    const num1 = Number(document.getElementById('first-number').value);
    const num2 = Number(document.getElementById('second-number').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (selectValue) {
            case 'igual':
                result.value = num1 === num2;
                break

            case 'maior':
                result.value = num1 > num2;
                break

            case 'maior-igual':
                result.value = num1 >= num2;
                break

            case 'menor':
                result.value = num1 < num2;
                break

            case 'menor-igual':
                result.value = num1 <= num2;
                break

            case 'diferente':
                result.value = num1 !== num2;
                break
        }
    } else {
        result.value = 'inválido'
    }
}

selectElem.onchange = selectItem;
button.onclick = toCompare;
