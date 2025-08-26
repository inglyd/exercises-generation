const leia = require('readline-sync');

const num1 = leia.questionInt('Digite o primeiro número inteiro: ');
const num2 = leia.questionInt('Digite o segundo número inteiro: ');

let i = 0;

if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 === 0);
        console.log(i)
    }

} else {
    console.log('Intervalo inválido!')
};






