const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite a sua idade: "))
console.log(idade > 18 ? "Maior de idade" : "Menor de idade");