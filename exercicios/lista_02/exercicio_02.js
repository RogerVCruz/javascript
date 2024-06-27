const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero: ", {limitMessage: "Erro, valor inválido!",});

let parOuImpar;
let positivoOuNegativo;

if (numero % 2 === 0) {
  parOuImpar = "par";
} else {
  parOuImpar = "ímpar";
}

if (numero >= 0) {
  positivoOuNegativo = "positivo";
} else {
  positivoOuNegativo = "negativo";
}

console.log(`O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}!`);
