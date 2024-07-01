const leia = require("readline-sync");

let numero1 = leia.questionInt("Digite o primeiro numero: ");
let numero2 = leia.questionInt("Digite o segundo número: ");
if (numero1 > numero2) {
  console.log("ERRO! Número1 deve ser menor que Número2.");
  return;
}

for (let i = 0; i < numero2; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é múltiplo de 3 e 5`);
  }
}
