const prompt = require('prompt-sync')()
 
let produtos = []
 
console.log("Cadastre 5 produto: ")
 
for(let i = 0; i < 5; i++) {
    let produto = prompt(`Digite o ${i + 1}º produto: `)
    produtos.push(produto)
}
console.log("\nLista de produto: ")
for(let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}
produtos.pop()

console.log("\n Segunda lista: ")
console.log(produtos)
 