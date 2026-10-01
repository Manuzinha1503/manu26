const prompt = require("prompt-sync")();
produto = Number(prompt("Informe o valor do produto: "));
console.log(produto > 0 ? "Em estoque" : "TEm que comprar")
