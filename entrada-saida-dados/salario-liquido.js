const leia = require('readline-sync');

let salarioBruto = leia.questionFloat('Digite o valor do salario bruto: ');
let adicionalNoturno = leia.questionFloat('Digite o valor do adicional noturno: ');
let horasExtras = leia.questionFloat('Digite o valor das horas extras: ');
let descontos = leia.questionFloat('Digite o valor dos descontos: ');

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(salarioLiquido);
