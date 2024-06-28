const leia = require("readline-sync");

let contador = 1;
let ligado = true;

while (ligado) {
  console.log("contador" + contador);
  contador++;
  if (contador > 10) {
    ligado = false;
  }
}
