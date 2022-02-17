let result = document.getElementById('result');
let button = document.getElementById('button');
let selectElem = document.getElementById('select');
let selectValue = selectElem.value;

selectElem.addEventListener('change', function() {
    let value = selectElem.value;
    selectValue = value;
})

button.addEventListener('click', function() {  
    let num1 = Number(document.getElementById('first-number').value);
    let num2 = Number(document.getElementById('second-number').value);

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
            result.value = num1 !== num2;;
            break
    };
})




