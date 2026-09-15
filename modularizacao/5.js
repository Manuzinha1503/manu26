/*5. Sistema de produtos
Crie um módulo contendo duas funções: uma para calcular o valor de um produto com desconto e
outra para calcular o valor com acréscimo. Importe as duas funções no arquivo principal e teste 
diferentes valores.*/
const{descontinho, acrecimo, prompt} = require("./5 555")
let a;
let x = 0;
a = parseFloat(prompt("Digite o valor do produto: "));
console.log("O desconto é de:",descontinho(a,x));
console.log("O acrecimo é de:",acrecimo(a,x));
