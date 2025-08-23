const leia = require('readline-sync');

let nota1 = leia.questionFloat('Digite o valor da primeira nota: ');
let nota2 = leia.questionFloat('Digite o valor da segunda nota: ');
let nota3 = leia.questionFloat('Digite o valor da terceira nota: ');
let nota4 = leia.questionFloat('Digite o valor da quarta nota: ');
let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(media);