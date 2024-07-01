const leia = require("readline-sync");

let idadeMenor21 = 0;
let idadeMaior50 = 0;

while (true) {
  let idade = leia.questionInt("Digite uma idade: ");

  if (idade < 0) {
    break;
  } else if (idade < 21) {
    idadeMenor21++;
  } else if (idade > 50) {
    idadeMaior50++;
  }
}

console.log(`Total de pessoas menores de 21 anos: ${idadeMenor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${idadeMaior50}`);
