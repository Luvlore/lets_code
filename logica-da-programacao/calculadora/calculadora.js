function createInputs() {
    for (index = 0; index < lines.length; index += 1) {
        if (lines[index] == lines[0]) {
            lines[index].innerHTML = "<input type='number' class='number' autofocus> +";
        } else if (index < lines.length -1) {
            lines[index].innerHTML = "<input type='number' class='number'> +";
        } else {
            lines[index].innerHTML = "<input type='number' class='number'>";
        };
    };
}

function createButton() {
    button.addEventListener('click', function() {
        for (index = 0; index < numbers.length; index += 1) {
            if (isNaN(numbers[index].value)) {
                sum = '';
            } else {
                sum += Number(numbers[index].value);
            };
        };
        result.value = sum;
    });
}

let lines = document.getElementsByClassName('input');
let numbers = document.getElementsByClassName('number');
let result = document.getElementById('result');
let sum = 0;
let button = document.getElementById('button');

createInputs()
createButton()
