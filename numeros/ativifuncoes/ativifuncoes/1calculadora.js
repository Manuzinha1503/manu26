const prompt = require("prompt-sync")();
function calculo(operacao, numero1, numero2){
    if (operacao === "mais") {
        return numero1 + numero2;
    } else if (operacao === "menos") {
        return numero1 - numero2;
    } else if (operacao === "vezes") {
        return numero1 * numero2;
    } else if (operacao === "divi") {
        return numero1 / numero2;
    } else {
        return "Operação inválida";
    }
}
let numero1 = Number(prompt("digite um numero: "));
let numero2 = Number(prompt("digite outro numero: "));
let operacao = prompt("digite a operação desejada: ");
console.log(calculo(operacao, numero1, numero2));