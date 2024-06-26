const leia = require("readline-sync");

// let quantidade;
// let altura;

// quantidade = leia.questionInt("Digite um valor do tipo inteiro: ", {limitMessage: "Digite um valor inteiro!"})

// console.log("O valor da variável digitado é:",quantidade)
const par_ou_ímpar = () => {
  while (true) {
    let valor = leia.questionInt("Digite o valor para verificar: ", {
      limitMessage:
        "Valor digitado não é do tipo Inteiro, digite um valor valido!",
    });

    if (valor === 0) {
      console.log("Desligando o programa.");
      return;
    }

    if (valor % 2 === 0) {
      console.log(valor, "é par");
    } else {
      console.log(valor, "é ímpar");
    }
  }
};

par_ou_ímpar();
