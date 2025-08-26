//Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, 
//mostre na tela se o doador está Apto ou Não Apto para doar sangue.
const leia = require('readline-sync');

const nome = leia.question('Digite o nome do doador: ');
const idade = leia.questionInt('Digite idade do doador: ');

const primeiraDoacao = leia.question('Primeira doação de sangue? (sim/não): ', {
    trueValue: 'sim',
    falseValue: 'não',
});

const apto = (idade >= 18 && idade <= 59) || (idade >= 60 && idade <= 69 && !primeiraDoacao);

if (apto) {
    console.log(`${nome} está apto(a) para doar sangue!`);
} else {
    console.log(`${nome} não esta apto(a) para doar sangue!`);
};