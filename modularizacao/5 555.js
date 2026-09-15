const prompt = require("prompt-sync")();
function descontinho(a, resultado){
   resultado = a -(a % 5);
   return resultado;
}
function acrecimo(a,resultado){
    resultado = a + (a * 0.3);
    return resultado;
}
module.exports = {
    descontinho,
    acrecimo,
    prompt
}