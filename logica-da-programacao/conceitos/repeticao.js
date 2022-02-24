// Números ímpares - 99 à 1

// let inicial = 99;

// while (inicial >= 1) {
//   if (inicial === 99) {
//     document.write('99 ');
//   } else {
//     document.write(`- ${('0' + inicial).slice(-2)} `);
//   }

//   inicial -= 2;
// }


// let num;

// while (num !== '0') {
//   num = prompt('Digite sue número:');
//   document.write(`${num} `);
// }

// for (let i = 99; i >= 1; i -= 2) {
//   if (i === 99) {
//     document.write('99 ');
//   } else {
//     document.write(`- ${('0' + i).slice(-2)} `);
//   }

//   console.log(i)
// }

// let ast = prompt('Quantos asteriscos irá querer?');

// for (let i = 0; i < Number(ast); i += 1) {
//   document.write('*')
// }

for (let lin = 1; lin <= 5; lin += 1) {
  for (let col = 1; col < 10; col += 1) {
    document.write('*');
  }
  document.write('<br>')
}