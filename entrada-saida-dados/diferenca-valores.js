const leia = require('readline-sync');

let n1 = leia.questionFloat('Digite o valor do primeiro numero: ');
let n2 = leia.questionFloat('Digite o valor do segundo numero: ');
let n3 = leia.questionFloat('Digite o valor do terceiro numero: ');
let n4 = leia.questionFloat('Digite o valor do quarto numero: ');
let produtoDiferenca = (n1 * n2) - (n3 * n4);

console.log(produtoDiferenca);