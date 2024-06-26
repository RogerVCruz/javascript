const leia = require("readline-sync");

let numero1 = leia.questionFloat("Digite o valor de n1: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let numero2 = leia.questionFloat("Digite o valor de n2: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let numero3 = leia.questionFloat("Digite o valor de n3: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let numero4 = leia.questionFloat("Digite o valor de n4: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let produto_N1_N2 = numero1 * numero2;

let produto_N3_N4 = numero3 * numero4;

let dirençaProduto = produto_N1_N2 - produto_N3_N4;

console.log(
  "A diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4 é: " +
    dirençaProduto.toFixed(1)
);
