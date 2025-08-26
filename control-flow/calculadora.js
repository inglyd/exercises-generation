const leia = require('readline-sync');

const itens = [{ codigo: 1, operacao: "Soma" },
{ codigo: 2, operacao: "Subtração" },
{ codigo: 3, operacao: "Multiplicação" },
{ codigo: 4, operacao: "Divisão" }];

itens.forEach(item => {
    console.log(`${item.codigo} - ${item.operacao}`);
});

const codigo = leia.questionInt('Digite código da operação matemática: ');
const numero1 = leia.questionFloat('Digite o primeiro número: ');
const numero2 = leia.questionFloat('Digite o segundo número: ');

let operacao;
let nomeOperacao;
let operador;

switch (codigo) {
    case 1:
        nomeOperacao = "Soma";
        operacao = numero1 + numero2;
        operador = '+';
        break;
    case 2:
        nomeOperacao = "Subtração";
        operacao = numero1 - numero2;
        operador = '-';
        break;
    case 3:
        nomeOperacao = "Multiplicação";
        operacao = numero1 * numero2;
        operador = '*';
        break;
    case 4:
        nomeOperacao = "Divisão";
        operacao = numero1 / numero2;
        operador = '/';
        break;
    default:
        console.log("Operação inválida.");
        break;
};

console.log(` ${numero1} ${operador} ${numero2} = ${operacao}`);