//Alterando texto com botão
function alterarTexto(){
    let nome = prompt("Qual seu nome ?")

    document.getElementById("textoNome").innerHTML = `Olá <strong>${nome}</strong>, seja bem-vindo(a)`
}

//Calculando dobro e metade
function dobroMetade() {
    let numero = Number(document.getElementById("dobro-metade").value)
    let dobro = numero * 2
    let metade = numero / 2

    document.getElementById("resultado_dobro").innerHTML = `O dobro do seu número é ${dobro} e a metade é ${metade}`
}

//Calculando média escolar
function mediaEscolar() {
    let nota1 = Number(document.getElementById("n1").value.trim()) 
    let nota2 = Number(document.getElementById("n2").value.trim()) 
    let nota3 = Number(document.getElementById("n3").value.trim()) 
    let nota4 = Number(document.getElementById("n4").value.trim()) 

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7) { document.getElementById("aprovacao").innerHTML = `Parabéns, você foi aprovado! <br> Média final: ${media}`}
    else if ( media >= 5 && media <= 7) {document.getElementById("aprovacao").innerHTML = `Recuperação! <br> Média final: ${media}`}
    else{document.getElementById("aprovacao").innerHTML = `Reprovado! <br> Média final: ${media}`}
}

