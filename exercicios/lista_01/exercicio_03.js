const leia = require("readline-sync");

let salarioBruto = leia.questionFloat(
  "Ola, digite o valor de seu salario bruto: ",
  {
    limitMessage: "Erro!, digite um valor do tipo float!",
  }
);

let adicionalNoturno = leia.questionFloat(
  "Ola, digite o valor de seu adicional noturno: ",
  {
    limitMessage: "Erro!, digite um valor do tipo float!",
  }
);
let horasExtras = leia.questionFloat(
  "Ola, digite o valor das suas horas extras: ",
  {
    limitMessage: "Erro!, digite um valor do tipo float!",
  }
);
let descontos = leia.questionFloat("Ola, digite o valor dos seus descontos: ", {
  limitMessage: "Erro!, digite um valor do tipo float!",
});

let salarioLiquido =
  salarioBruto + adicionalNoturno + horasExtras * 5 - descontos;

console.log("Seu salário líquido é: " + salarioLiquido.toFixed(2));
