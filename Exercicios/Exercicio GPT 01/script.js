//Exercicio 1 - nome

var nome = prompt("Qual seu nome ?")

//              ↓ Como fazer a primeira letra ficar maiuscula
var formatado = nome.charAt(0).toLocaleUpperCase() + nome.slice(1).toLocaleLowerCase()

alert(`Olá ${nome}, seja bem-vindo`)
document.write(`Seu nome em maiusculo fica ${nome.toLocaleUpperCase()} e possui ${nome.length} letras, ele formatado fica ${formatado}<br>`)

//Exercicio 2 - Calculadora

var numero1 = Number(prompt("Escolha um número"))
var numero2 = Number(prompt("Escolha outro numero"))

var add = numero1 + numero2
var sub = numero1 - numero2
var div = numero1 / numero2
var mult = numero1 * numero2


document.writeln(`A soma dos numeros ${numero1} e ${numero2} é ${add}<br>`)

document.writeln(`A subtração dos numeros ${numero1} e ${numero2} é ${sub}<br>`)

 //↓ Usar o toFixed para colocar o numero de casas decimais
document.writeln(`A divisão dos numeros ${numero1} e ${numero2} é ${div.toFixed(2)}<br>`)

document.writeln(`A multiplicação dos numeros ${numero1} e ${numero2} é ${mult}<br>`)

//Exercicio 4

var diaria = Number(prompt("Digite o valor da sua diaria"))
var dias = Number(prompt("Digite os dias trabalhados"))
var salario = diaria * dias
var desconto = salario * 0.10
var salarioFinal = salario - desconto



document.write(`Seu salario será de ${salario.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}<br>`)

document.write(`Seu salario será de ${salario.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}, com desconto ele ficará ${salarioFinal.toLocaleString("pt-br", {style:"currency", currency: "BRL"})}<br>`)

//Exercicio 5 

 var idade = Number(prompt("Qual sua idade atual ?"))
var IdadeFuturo = idade + (2050 - new Date().getFullYear())



document.write(`Em 2050 você terá ${IdadeFuturo} anos.`)



