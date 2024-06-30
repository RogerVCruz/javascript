const leia = require("readline-sync");

let matrizInteiros = Array(2);

for (let index = 0; index < matrizInteiros.length; index++) {
  matrizInteiros[index] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  for (
    let indiceColuna = 0;
    indiceColuna < matrizInteiros.length;
    indiceColuna++
  ) {
    matrizInteiros[indiceLinha][indiceColuna] = leia.questionFloat();
  }
}

console.table(matrizInteiros);
