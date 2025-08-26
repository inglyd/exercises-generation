const leia = require('readline-sync');

const palavra1 = leia.question('Digite a primeira palavra sobre o animal: ');
const palavra2 = leia.question('Digite a segunda palavra sobre o animal: ');
const palavra3 = leia.question('Digite a terceira palavra sobre o animal: ');

if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            animal = "Águia";
        } else if (palavra3 === "onivoro") {
            animal = "Pomba";
        }
    } else if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") {
            animal = "Homem";
        } else if (palavra3 === "herbivoro") {
            animal = "Vaca";
        }
    }
} else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            animal = "Pulga";
        } else if (palavra3 === "herbivoro") {
            animal = "Lagarta";
        }
    } else if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") {
            animal = "Sanguessuga";
        } else if (palavra3 === "onivoro") {
            animal = "Minhoca";
        }
    }
}

console.log(`O animal é: ${animal}`);
