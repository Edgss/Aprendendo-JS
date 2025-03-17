var nome = window.prompt("Olá, qual seu nome ?")
window.alert(`Olá, ${nome}. Seja bem-vindo!`)

var numero1 = Number(window.prompt("Escolha um numero"))
var numero2 = Number(window.prompt("Escolha outro numero"))
var soma = numero1 + numero2

document.write(`Curisosidade, você sabia que ${nome} possui ${nome.length} letras ?<br>`)
document.write(`Seu nome em maiusculo fica ${nome.toUpperCase()}<br>`)

document.write(`Esse serve para criar texto e colocar tipo ${nome} e tambem que a soma do numero ${numero1} e ${numero2} é ${soma  }`)


/* →Para mudar de ponto para virgula 

var n1 = 1518
           ↓ esse significa que quero o ponto 2 casas decimais <
n1.toFixed(2).replace(".",",")

→ Para colocar o valor em real, euro, dolar se utiliza

n1.toLocaleString("pt-br",{style: "currency", currency: "BRL"})
*/

//→ Criando exercicios de criar um calculador de salario

var diaria = Number(prompt("Digite aqui o valor da sua diaria"))
var dias = Number(prompt("Quantos dias trabalhados ?"))
var salario = diaria * dias -50

document.write(`<p class= "teste">Você irá receber um total de ${salario.toLocaleString("pt-br",{style:"currency",currency:"BRL"})} 💸<p>`)