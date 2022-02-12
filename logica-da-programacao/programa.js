// (EcmaScript5 - Até Jul/2015) — ex: uso do var

// armazenando dados
// entrada de dados
let nome = prompt('Digite seu nome: ');
let email = prompt('Digite seu emal: ');
let telefone = prompt('Digite seu telefone: ');

// executando instruções
// comando(param2, param2);
// contexto.comando(param1, param2);

// saída de dados (console)
console.log('nome', nome);
console.log('email', email);
console.log('telefone', telefone);

// saída de dados (html)
document.write('<hr>Nome: ', nome, '<br>');
document.write('Email: ', email, '<br>');
document.write('Telefone: ', telefone, '<hr>');