const leia = require("readline-sync");

console.log("Seja bem vindo à calculadora de média.");

let nota1 = leia.questionFloat("Insira a primeira nota: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let nota2 = leia.questionFloat("Insira a segunda nota: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let nota3 = leia.questionFloat("Insira a terceira nota: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let nota4 = leia.questionFloat("Insira a quarta nota: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Sua média foi: " + media.toFixed(1));
