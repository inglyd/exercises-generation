const leia = require('readline-sync');
let soma = 0;
let numInt;

do {
    numInt = leia.questionInt('Digite um número inteiro: ');
    numInt > 0 && (soma = soma + numInt);

} while (numInt != 0);
console.log(`A soma dos números positivos é: ${soma}`);