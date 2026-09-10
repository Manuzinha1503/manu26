const prompt = require("prompt-sync")();
function celsius(a, resultado){
    resultado = (a - 32) * 5/9
    return resultado;
}
function fahrenheit(a, resultado){
    resultado = (a * 9/5) + 32
    return resultado;
}
function kelvins(a, resultado){
    resultado = a + 273.15
    return resultado;
}
module.exports = {
    celsius,
    fahrenheit,
    kelvins,
    prompt
}