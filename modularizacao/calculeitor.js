const {prompt, soma, menos, multiplicacao, divisao} = require("./calculadora");
let a;
let b;
let opcao;
let x = 0;
console.log("---------CALCULADORA-----------------")
console.log("1-Soma 2-Subtração 3-Multiplicação  4- Divisão")
opcao = Number(prompt("Digite o numero da sua opção: "));
a = Number(prompt("Seu primeiro número: "))
b = Number(prompt("Seu sengundo número: "))
if(opcao === 1 ){
    console.log(soma(a,b, x));
}
else if(opcao === 2){
    console.log(menos(a,b));
}
else if(opcao === 3){
    console.log(multiplicacao(a,b, x));
}
else if(opcao === 4){
    console.log(divisao(a,b, x));
}
else{
    console.log("Opção invalida!")
}