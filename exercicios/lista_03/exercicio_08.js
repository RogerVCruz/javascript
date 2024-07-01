const leia = require("readline-sync");

let vetor = Array();
let elementosParesVetor = Array();
let indicesImparesVetor = Array();
let somaElementos = 0;
let media;

for (let indice = 0; indice < 10; indice++) {
  let numero = leia.questionInt(`Digite o valor ${indice + 1}: `);
  vetor[indice] = numero;
  somaElementos += numero;

  if (numero % 2 === 0) {
    elementosParesVetor.push(vetor[indice]);
  }

  if (indice % 2 !== 0) {
    indicesImparesVetor.push(vetor[indice]);
  }
}

media = parseFloat(somaElementos / vetor.length).toFixed(2);

console.log(`Elementos nos índices ímpares: ${indicesImparesVetor}`);
console.log(`Elementos pares: ${elementosParesVetor}`);
console.log(`Soma: ${somaElementos}`);
console.log(`Média: ${media}`);
