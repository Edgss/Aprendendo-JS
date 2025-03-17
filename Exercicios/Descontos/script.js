alert("Estamos com ofertas de 10% em todos os produtos, calcule já o seu:")
var preco = Number(prompt("Qual o valor do produto ?"))
var desconto = preço * 0.10
var precoFinal = preço - desconto


document.writeln(`O valor final do produto com o desconto é de ${precoFinal.toLocaleString("pt-br", {style:"currency", currency: "BRL"})}`)