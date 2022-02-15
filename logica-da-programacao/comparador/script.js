let button = document.getElementById('button');
button.addEventListener('click', function() {
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);
    let result = document.getElementById('result');
    
    if (num1 > num2) {
        result.value = true;
    } else {
        result.value = false;
    };
});