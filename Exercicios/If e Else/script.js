/* var nome = prompt("Qual seu nome ?").trim()
alert(`Olá ${nome}, seja bem-vindo(a)!`)  */

    //Exercicio 1 - Validar idade
function validador() {

    var idade = Number(document.getElementById("idade").value)

    if(idade >= 18) {
        document.getElementById("mostrarIdade").innerHTML = `Parabéns ${nome}, você atingiu a maior idade`
    } else{
        document.getElementById("mostrarIdade").innerHTML = `Infelizmente você ainda não atingiu a maior idade`
    }
}

    //Exercicio 2 - Impar ou par
    function ImparPar(){
        var numero = Number(document.getElementById("impar").value.trim())

        if (numero % 2 === 0){
            document.getElementById("par").innerHTML = "O número é par"
        } else{ document.getElementById("par").innerHTML = "O número é impar"}
    }

    //Exercicio 3 - desconto
    function descontado() {
        var valor = Number(document.getElementById("desconto").value)
        var desconto1 = valor * 0.10
        var total1 = valor - desconto1

        var desconto2 = valor * 0.05
        var total2 = valor - desconto2

        if(valor >= 100){
            document.getElementById("mostrarDesconto").innerHTML = `O valor final do seu produto é de: ${total1.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}.<br> Desconto total = ${desconto1.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}`
        } else{document.getElementById("mostrarDesconto").innerHTML = `O valor final do seu produto é de: ${total2.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}.<br> Desconto total = ${desconto2.toLocaleString("pt-br", {style: "currency", currency:"BRL"})}`}
}

//Exercicio 4 - Notas

function calcular() {
var nota1 = Number(document.getElementById("n1").value)
var nota2 = Number(document.getElementById("n2").value)
var nota3 = Number(document.getElementById("n3").value)
var nota4 = Number(document.getElementById("n4").value)
var media = (nota1 + nota2 + nota3 + nota4) / 4


if(media >= 7){
    document.getElementById("resultado").innerHTML = "Aprovado 🎉"

} else if (media >= 5 && media <= 6.99) {document.getElementById("resultado").innerHTML = "Recuperação ⚠️"}

else { document.getElementById("resultado").innerHTML = "Reprovado ❌"}

document.getElementById("media").innerHTML = `Sua média final é: ${media.toFixed(2)}`
}

//Exercicio 5 - VALIDAR SENHA
function acessar(){
    var nome = document.getElementById("nome").value.trim()

    if(nome === "edu"){
        document.getElementById("acesso").innerHTML = "Acesso permitido ✅"
    } else{document.getElementById("acesso").innerHTML = "Senha incorreta ❌"}
}

/* Caso queira fazer com numero:
    function acessar(){
        var nome = Number(document.getElementById("senha").value.trim())
    
        if(nome === 123){
            document.getElementById("acesso").innerHTML = "Acesso permitido ✅"
        } else{document.getElementById("acesso").innerHTML = "Senha incorreta ❌"}
    } */