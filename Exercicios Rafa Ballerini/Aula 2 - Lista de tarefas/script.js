function adicionarTarefa(){
    //Usando o input pra pegar dados
    let tarefaRecebida = document.getElementById("tarefaRecebida")
    let tarefa = tarefaRecebida.value
    document.getElementById("mensagem").textContent = "Tarefa adicionada com sucesso!"

    //Criando a ul e botando li dentro
    //  ↓ Variavel vai receber o valor da ul
    let listaTarefas = document.getElementById("listaTarefas")
    console.log(listaTarefas)
    // Colocando o li em uma variavel para usar depois, pois ele tem que ser inserida 
    let novaTarefa = document.createElement("li")

    //Conteúdo que irá receber o valor de tarefa
    novaTarefa.textContent = `${tarefa}`
    listaTarefas.appendChild(novaTarefa)





    //Fazendo pra que a lista se apague
    tarefaRecebida.value = ""
}