const leia = require('readline-sync');

let arrayNum = [2, 4, 8, 5, 9, 1, 3, 6, 7, 10];

let num = leia.questionInt('Digite o número que você deseja encontrar: ');

let index = arrayNum.indexOf(num);

if (index !== -1) {
    console.log(`O número ${num} está localizado na posição: ${index}`);
} else {
    console.log("Não foi encontrado!")
};

