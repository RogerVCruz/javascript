const input = require("readline-sync");

console.log("Bem vindo à calculadora");

console.log("Para Soma digite:          1");
console.log("Para Subtração digite:     2");
console.log("Para Multiplicaçâo digite: 3");
console.log("Para Divisão digite:       4");

let option = input.questionInt("Escolha uma operacao: ", {
  limitMessage: "Erro, valor inválido!",
});

let num1 = input.questionFloat("Digite um valor para N1: ", {
  limitMessage: "Erro, valor inválido!",
});

let num2 = input.questionFloat("Digite um numero para N2: ", {
  limitMessage: "Erro, valor inválido!",
});

switch (option) {
  case 1:
    let soma = num1 + num2;
    console.log(`A soma entre ${num1} e ${num2} é: ${soma.toFixed(1)}`);
    break;

  case 2:
    let subtracao = num1 - num2;
    console.log(`A diferença ${num1} e ${num2} é: ${subtracao.toFixed(1)}`);
    break;

  case 3:
    let multiplicacao = num1 * num2;
    console.log(
      `A multiplicacao entre ${num1} é ${num2} ${multiplicacao.toFixed(1)}`
    );
    break;

  case 4:
    let divisao = num1 / num2;
    console.log(`A dvisião entre ${divisao.toFixed(1)}`);
    break;

  default:
    console.log("Erro, operação não existente");
    console.log("Encerrando o programa.");
    break;
}
