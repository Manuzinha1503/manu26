const prompt = require("prompt-sync")();
function calculo(){
    let idade = Number(prompt("Qual é a sua idade? "))
    if(idade >= 18){
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
}
calculo()