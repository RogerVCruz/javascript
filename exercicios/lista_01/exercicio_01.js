const leia = require("readline-sync");

let salario = leia.questionFloat("Ola, digite o valor de seu salario: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let abono = leia.questionFloat("Agora digite o valor do seu abono: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let novoSalario = salario + abono;

console.log("Seu novo salário é: " + novoSalario.toFixed(2));
