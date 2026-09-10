const{prompt,celsius, fahrenheit, kelvins} = require("./temperatura");
let a;
let temperatura;
let x = 0;
console.log("1- Celsius 2- Fahrenheit 3- Kelvin");
temperatura = Number(prompt("Escolha uma opção: "));
a = Number(prompt("Digite a temperatura: "));
if(temperatura === 1){
    console.log(celsius(a,x));
}
else if(temperatura === 2){
    console.log(fahrenheit(a,x));
}
else if(temperatura === 3){
    console.log(kelvins(a,x));
}
else{
    console.log("Opção invalida! ")
}