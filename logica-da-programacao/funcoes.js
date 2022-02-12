document.write('<br>', '=====FUNÇÕES=====');

// Declaração de Função Nomeada

function add(...numbers) {
    let add = 0;
    for (number of numbers) {add += number};
    return add;
}

document.write('<br>', add(3, 7, 7, 8, 9, 10, 64));
document.write('<br>', add(4, 3, 2))


function sub(...numbers) {
    let sub = 0;
    for (let number of numbers) {sub -= number};
    return sub;
}

document.write('<br>', sub(20, 3, 4, 5, 6, 10))
document.write('<br>', sub())

function mult(...numbers) {
    let mult = 1;
    for (let number of numbers) {mult *= number};
    return mult;
}

document.write('<br>', mult(4, 3, 6, 2));

function div(...numbers) {
    let div = 0;
    for (let number of numbers) {
        if (number === numbers[0]) {
            div = number;
        } else {
            div /= number;
        }
    };
    return div;
}

document.write('<br>', div(80, 4));

// Função Não Nomeada (Anônima)

const sum = function(...numbers) {
    soma = 0;
    for (let number of numbers) {
        soma += number;
    };
    return soma;
}

document.write('<br>', sum());
document.write('<br>', sum(3, 4));
document.write('<br>', sum(6, 8, 2));
document.write('<br>', sum(10, 59, 39));

