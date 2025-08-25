const leia = require('readline-sync');

const formatadorBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

const codigoProduto = leia.questionInt('Escolha uma opção digitando o código: ');
const quantidade = leia.questionInt('Escolha a quantidade: ');

let produto;
let preco;

switch (codigoProduto) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Código inválido.");
        break;
}

let total = preco * quantidade;
console.log(`Pedido: ${produto}. Quantidade: ${quantidade}`);
console.log(`Total: ${formatadorBRL.format(total)}`);


// opção sem switch case
// const formatadorBRL = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL"
// });

// const itens = [{ codigo: 1, produto: "Cachorro Quente", preco: 10.00 },
// { codigo: 2, produto: "X-Salada", preco: 15.00 },
// { codigo: 3, produto: "X-Bacon", preco: 18.00 },
// { codigo: 4, produto: "Bauru", preco: 12.00 },
// { codigo: 5, produto: "Refrigerante", preco: 8.00 },
// { codigo: 6, produto: "Suco de laranja", preco: 13.00 }];

// itens.forEach(item => {
//     console.log(`${item.codigo} - ${item.produto} -> ${formatadorBRL.format(item.preco)}`);
// });

// const escolhaProduto = leia.questionInt('Escolha uma opção digitando o código: ')
// const produtoSelecionado = itens.find(item => item.codigo === escolhaProduto);
// const escolhaQuantidade = leia.questionInt('Escolha a quantidade: ')

// const valorTotal = produtoSelecionado.preco * escolhaQuantidade;
// console.log(`O valor total é: ${valorTotal}`);


