const lines = document.getElementsByClassName('input');
const numbers = document.getElementsByClassName('number');
const result = document.getElementById('result');
const button = document.getElementById('button');

function createInputs() {
    for (index = 0; index < lines.length; index += 1) {
        if (lines[index] == lines[0]) {
            lines[index].innerHTML = "<input type='number' class='number' autofocus> +";
        } else if (index < lines.length - 1) {
            lines[index].innerHTML = "<input type='number' class='number'> +";
        } else {
            lines[index].innerHTML = "<input type='number' class='number'>";
        };
    };
}

button.onclick = function () {
    let sum = 0;
    for (index = 0; index < numbers.length; index += 1) {
        if (isNaN(numbers[index].value)) {
            sum = '';
        } else {
            sum += Number(numbers[index].value);
        };
    };
    result.value = sum;
};

createInputs()
