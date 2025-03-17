alert("Vamos calcular a média dos seus 4 bimestres ? Utilize (.) caso precise")

var nome = prompt("Qual seu nome ?")
var nota1 = Number(prompt("Nota do 1º bimestre"))
var nota2 = Number(prompt("Nota do 2º bimestre"))
var nota3 = Number(prompt("Nota do 3º bimestre"))
var nota4 = Number(prompt("Nota do 4º bimestre"))
var media = (nota1 + nota2 + nota3 + nota4) / 4

document.getElementById("media").innerHTML = (`Olá ${nome}, a sua média final é de ${media.toFixed(2)}!`)


if( media >= 5) {
    document.getElementById("resultado").innerHTML = (`Parabéns ${nome}, você passou 👏`)
} else{
    document.getElementById("resultado").innerHTML =(`Infelizmente você reprovou 😔`)
}