// try {
//   let variavel = true;

//   if (variavel == true) {
//     let escopoLocal = "Acessando a variável escopo local";
//     console.log(escopoLocal, "Dentro do IF");
//   }

//   /* não é possível acessar a variavel
//   dentro do escopo do IF, vai dar erro
//   */
//   console.log(escopoLocal);
// } catch (error) {
//   console.error({
//     err: "ERRO!",
//     msg: "Não foi possível acessar o escopo local!",
//   });
// }

let variavel = true;

if (variavel == true) {
  var escopoGlobal = "acessando a variável escopoGlobal";
  console.log(escopoGlobal, "Dentro do if");
}

/* 
Neste caso vamos conseguir acessar de qualquer 
lugar é possível acessar a variavel dentro do escopo do IF
*/
console.log(escopoGlobal, "Fora do if");
