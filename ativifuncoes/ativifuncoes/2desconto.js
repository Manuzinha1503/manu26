const prompt = require("prompt-sync")();
let cliente = prompt("Está cadastrado no sistema? ");
console.log(cliente === Sim ? "Tem 10% de desconto" : "Não tem desconto")