const leia = require('readline-sync');

const itens = [{ codigo: 1, operacao: "Saldo" },
{ codigo: 2, operacao: "Saque" },
{ codigo: 3, operacao: "Depósito" }];

itens.forEach(item => {
    console.log(`${item.codigo} - ${item.operacao}`);
});

const codigo = leia.questionInt('Digite o código da operação: ');
const saldo = 1000;

let operacao;
let nomeOperacao;

switch (codigo) {
    case 1:
        nomeOperacao = "Saldo";
        operacao = saldo;
        break;
    case 2:
        nomeOperacao = "Saque";
        const valorSaq = leia.questionFloat('Digite o valor do saque R$: ');
        const saque = saldo - valorSaq;
        operacao = saque < 0 ? console.log('Saldo insuficiente!') : saque;
        break;
    case 3:
        nomeOperacao = "Depósito";
        const valorDep = leia.questionFloat('Digite o valor do depósito R$: ');
        operacao = saldo + valorDep;
        break;
    default:
        console.log("Operação inválida.");
        break;
};

console.log(`Operação - ${nomeOperacao} - ${operacao}`);