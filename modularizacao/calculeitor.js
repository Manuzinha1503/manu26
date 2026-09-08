const {prompt, soma, menos, multiplicacao, divisao} = require("./calculadora");
let a;
let b;
let opcao;
let resultado;
console.log("---------CALCULADORA-----------------")
console.log("1-Soma 2-Subtração 3-Multiplicação  4- Divisão")
opcao = Number(prompt("Digite o numero da sua opção: "));
a = Number(prompt("Seu primeiro número: "))
b = Number(prompt("Seu sengundo número: "))
if(opcao === 1 ){
    console.log(soma());
}
else if(opcao === 2){
    console.log(menos());
}
else if(opcao === 3){
    console.log(multiplicacao());
}
else if(opcao === 4){
    console.log(divisao());
}
else{
    console.log("Opção invalida!")
}
console.log(resultado)