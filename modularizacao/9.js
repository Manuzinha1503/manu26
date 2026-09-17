/*Crie um módulo contendo uma função que receba o peso e a altura de uma pessoa e calcule seu IMC.
Crie também uma função que receba o IMC calculado e retorne uma classificação, como 
"Abaixo do peso", "Peso normal" ou "Acima do peso".
No arquivo principal, solicite o peso e a altura utilizando prompt-sync, importe as funções do 
módulo e exiba o IMC e sua classificação. */
const{ calculo, classificação, prompt } = require("./9 99");
let x = 0;
let altura = Number(prompt("Digite a sua altura: "));
let peso = Number(prompt("Digite o seu peso: "));
calculo(peso, altura);
classificação(imc);