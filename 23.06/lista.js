const prompt = require('prompt-sync')()
 
let participantes = []
 
console.log("Lista de participantes")
 
for(let i = 1; i <= 5; i++) {
    participantes.push(prompt("Digite o nome do participante: "));
}
 
console.log("\nLista de participantes:")
console.log(participantes)
 
console.log("\nColoque um participante no final da lista:")
participantes.push(prompt("Digite o nome do participante: "))
 
console.log("Lista de participantes atualizada:")
console.log(participantes)
 
participantes.pop()
console.log("\nLista após apagar o último participante:")
console.log(participantes)
 
participantes.shift()
console.log("\nLista após apagar o primeiro participante:")
console.log(participantes)
 
console.log("\nColoque um participante no início da lista:")
participantes.unshift(prompt("Digite o nome do participante: "))
console.log("Lista de participantes atualizada:")
console.log(participantes)
 
console.log("\nO primeiro participante é: " + participantes[0])
console.log("O último participante é: " + participantes[participantes.length - 1])
 
console.log("\nSua lista atualizada de participantes é: ")
console.log(participantes)