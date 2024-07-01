const leia = require("readline-sync");

let numerosPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = leia.questionInt(`Digite um valor para o numero ${i} : `);

  numero % 2 === 0 ? numerosPares++ : numerosImpares++;
}

console.log(`Total de números pares: ${numerosPares}`);
console.log(`Total de números impares: ${numerosImpares}`);
