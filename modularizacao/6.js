/*6. Classificação de aluno com operador ternário
Crie um módulo contendo uma função que receba a média de um aluno e utilize o operador 
ternário para retornar "Aprovado" caso a média seja maior ou igual a 7 e "Reprovado" caso 
contrário. No arquivo principal, importe a função, solicite a média do aluno e exiba o resultado.*/
const prompt = require("prompt-sync")();
let media = 0
let a = Number(prompt("Digite a primeira nota: "));
let b = Number(prompt("Digite a segunda nota: "));
let c = Number(prompt("Digite a terceira nota: "));
function notas(a, b, c){
    media = (a + b + c)/3;
    return media
}
notas(a, b, c);
console.log(notas(a, b, c) >= 7 ? "Aprovado" : "Reprovado")