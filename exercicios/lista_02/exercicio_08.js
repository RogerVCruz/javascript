const leia = require("readline-sync");

console.log("Bem vindo ao Online Banking");

console.log("Para sacar ");

let numeroOperacao = leia.questionFloat("Digite um numero: ", {
  limitMessage: "Erro, valor inválido!",
});

let saldo = 1000.0;
let saque = 0;
let deposito = 0;

switch (numeroOperacao) {
  case 1:
    console.log(`Seu saldo é de R$${saldo.toFixed(2)}`);
    break;

  case 2:
    saque = leia.questionFloat("Digite o valor do saque: ", {
      limitMessage: "Erro, valor inválido!",
    });
    if (saldo - saque <= 0) {
      console.log("Saldo insuficiente! Não foi possível concluir a operação.");
    } else {
      saldo -= saque;
      console.log(
        `Operação no valor de R$${saque.toFixed(2)} concluída com sucesso!`
      );
      console.log(`Novo saldo R$${saldo.toFixed(2)}`);
    }
    break;

  case 3:
    deposito = leia.questionFloat("Digite o valor do depósito: ", {
      limitMessage: "Erro, valor inválido!",
    });
    console.log(`O depósito foi realizado com sucesso!`);
    console.log(`Novo saldo R$${saldo.toFixed(2)}`);
    break;

  default:
    console.log("Erro, operação não existente");
    console.log("Encerrando o programa.");
    break;
}
