const leia = require("readline-sync");

let matriz = Array(10);
let mediaAlunos = Array();

for (let indice = 0; indice < matriz.length; indice++) {
  matriz[indice] = Array(4);
}

for (let linha = 0; linha < matriz.length; linha++) {
  let somaNotas = 0;

  for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
    let notaAluno = leia.questionFloat("Digite sua nota: ");
    matriz[linha][coluna] = notaAluno;
    somaNotas += notaAluno;
  }
  mediaAlunos.push((somaNotas / 4).toFixed(1));
}

console.log(mediaAlunos);
