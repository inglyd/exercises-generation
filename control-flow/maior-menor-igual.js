const leia = require('readline-sync');

const valorA = leia.questionInt('Digite o número A: ');
const valorB = leia.questionInt('Digite o número B: ');
const valorC = leia.questionInt('Digite o número C: ');


if (valorA + valorB > valorC) {
    console.log('A soma de A + B é maior do que C')
} else if (valorA + valorB < valorC) {
    console.log('A soma de A + B é menor do que C')
} else if (valorA + valorB === valorC) {
    console.log('A soma de A + B é igual a C')
}

