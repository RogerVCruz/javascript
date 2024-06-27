const leia = require("readline-sync");

console.log("Bem vindo ao jogo!");
console.log("Instruções não digite acentos ou escreva palavras no plural!");

let entrada = leia
  .question(console.log("Escolha entre Invertebrado e Vertebrado: "), {
    encoding: "latin1",
  })
  .toLowerCase();

if (entrada === "vertebrado") {
  entrada = leia
    .question(console.log("Escolhas: Ave e Mamífero: "))
    .toLowerCase();

  if (entrada === "ave") {
    entrada = leia
      .question(console.log("Escolhas: Carnívoro e Onívoro: "))
      .toLowerCase();

    if (entrada === "carnivoro") {
      console.log("Seu resultado é Águia");
      return;
    }

    if (entrada === "onivoro") {
      console.log("Seu resultado é Pomba");
      return;
    }
  }

  if (entrada === "mamifero") {
    entrada = leia
      .question(console.log("Escolhas: Onívoro e Herbívoro"))
      .toLowerCase();

    if (entrada === "onivoro") {
      console.log("Seu resultado é Homem");
      return;
    }

    if (entrada === "herbivoro") {
      console.log("Seu resultado é Vaca");
      return;
    }
  }
}

if (entrada === "invertebrado") {
  entrada = leia
    .question(console.log("Escolhas: Inseto e Mamífero"))
    .toLowerCase();

  if (entrada === "inseto") {
    entrada = leia
      .question(console.log("Escolhas: Hematófago e Herbivoro"))
      .toLowerCase();

    if (entrada === "hematofago") {
      console.log("Seu resultado é Pulga");
      return;
    }

    if (entrada === "herbivoro") {
      console.log("Seu resultado é Lagarta");
      return;
    }
  }

  if (entrada === "anelideo") {
    entrada = leia
      .question(console.log("Escolhas: Hematófago e Onívoro"))
      .toLowerCase();

    if (entrada === "hematofago") {
      console.log("Seu resultado é Sanguessuga");
      return;
    }

    if (entrada === "onivoro") {
      console.log("Seu resultado é Minhoca");
      return;
    }
  }
}

console.log("Erro, tente novamente!");
