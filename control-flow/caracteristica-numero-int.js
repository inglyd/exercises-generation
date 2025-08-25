const leia = require('readline-sync');

const numero = leia.questionInt('Digite um número inteiro: ');

if (numero % 2 === 0 && numero > 0) {
    console.log(`O número ${numero} é par e positivo!`)
} else if (numero % 2 !== 0 && numero < 0) {
    console.log(`O número ${numero} é ímpar e negativo!`)
} else if (numero % 2 === 0 && numero < 0) {
    console.log(`O número ${numero} é par e negativo!`)
} else if (numero % 2 !== 0 && numero > 0) {
    console.log(`O número ${numero} é ímpar e positivo!`)
} else {
    console.log('Você deve digitar um número inteiro.')
}