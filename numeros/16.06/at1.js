const prompt = require('prompt-sync')()
 
let numeros = []
 
console.log("Escreva 6 números")
 
for(let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Digite um número: "))
    numeros.push(num)
}
 
console.log("Números positivos:")
 
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 0) {
        console.log(numeros[i])
    }
}