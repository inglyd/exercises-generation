const leia = require('readline-sync');
let valorSalario = leia.questionFloat('Digite o valor do salário R$: ');
let valorAbono = leia.questionFloat('Digite o valor do abono R$: ');
let novoSalario = valorSalario + valorAbono;
let formatadorBrl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`O novo salário é: ${formatadorBrl.format(novoSalario)}`);