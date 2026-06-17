const prompt = require('prompt-sync')()

let cidades = []

console.log("Cadastre 5 cidades:")

for(let i = 0; i < 5; i++) {
    let cidade = prompt(`Digite o ${i + 1}º cidade: `)
    cidades.push(cidade)
}
console.log("\nLista de cidades: ")
for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}
cidades.push(cidades[0])

console.log("\nLista após adicionar a primeira cidade:")
console.log(cidades)