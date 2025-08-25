const leia = require('readline-sync');

const formatadorBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

const nome = leia.question('Digite nome: ');
const codigo = leia.questionInt('Digite código do cargo: ');
const salario = leia.questionFloat('Digite o salário R$: ');

let cargo;
let reajuste;

switch (codigo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        reajuste = 0.7;
        break;
    case 3:
        cargo = "Supervisor";
        reajuste = 0.9;
        break;
    case 4:
        cargo = "Motorista";
        reajuste = 0.6;
        break;
    case 5:
        cargo = "Estoquista";
        reajuste = 0.5;
        break;
    case 6:
        cargo = "Técnico de TI";
        reajuste = 0.8;
        break;
    default:
        console.log("Código inválido.");
        break;
}

const novoSalario = salario + (reajuste * salario);


console.log(`Nome do colaborador: ${nome}. Cargo: ${cargo}. Salário: ${formatadorBRL.format(novoSalario)}.`);