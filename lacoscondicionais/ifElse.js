const leia = require("readline-sync");

let nome;
let idade;

nome = leia.question("Digite seu nome: ");
idade = leia.questionInt("Digite sua idade: ");

console.log(nome.toUpperCase());

if (idade >= 18) {
  console.log("Seu plano custa 200");
}

idade < 18 ? console.log("Seu plano custa 100") : console.log("Plano não encontrado");
