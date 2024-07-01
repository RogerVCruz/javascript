const leia = require("readline-sync");

let menor3 = 0;
let soma = 0;

do {
  let numero = leia.questionInt("Digite 0 parar ou digite um valor: ");

  if (numero === 0) {
    break;
  } else if (numero % 3 === 0) {
    soma += numero;
    menor3++;
  }
} while (true);

console.log(
  `A média de todos os número múltiplos de 3 é: ${(soma / menor3).toFixed(2)}`
);
