const prompt = require("prompt-sync")();
function calculo(peso, altura) {
    imc = peso / (altura * altura);
    console.log(imc);
    return imc;
}
function classificação(imc){
    if(imc< 18.5){
        console.log("Abaixo do peso");
    }
    else if(imc < 25){
        console.log("Peso normal!");
    }
    else{
        console.log("Acima do peso");
    }
}
module.exports = {
    calculo,
    classificação,
    prompt
}