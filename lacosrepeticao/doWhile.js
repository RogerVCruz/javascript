const leia = require("readline-sync");

console.log("Calculadora de potência");

let num = leia.questionInt("Digite um número para elevar ao cubo: ");
let resultado = 1;
let contador = 0;

do {
  contador++;
  resultado = num * resultado;
  console.log(resultado);
} while (contador !== 3);
