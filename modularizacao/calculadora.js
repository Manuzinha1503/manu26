const prompt = require("prompt-sync")();
function menos(a,b,resultado){
    resultado = a-b
    return resultado;
}
function soma(a,b, resultado){
    resultado = a+b
    return resultado;
}
function multiplicacao(a,b, resultado){
    resultado = a*b
    return resultado;
}
function divisao(a,b,resultado){
    resultado = a/b
    return resultado;
}
module.exports = {
    soma,
    menos,
    multiplicacao,
    divisao,
    prompt
}