    /* nome = prompt("Olá, qual seu nome ?")
    document.getElementById("mensagem1").textContent = `Olá ${nome}, vamos adicionar suas tarefas!` */

    function adicionarTarefas(){
        //Mensagem pós click de botão
        document.getElementById("mensagem2").textContent = "Tarefa adicionada com sucesso!"

        //Entrada de tarefas no arquivo
        let entradaTarefas = document.getElementById("entradaTarefas")
        let tarefas = entradaTarefas.value

        //Criando a li e colocando dentro da ul
        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        
        listaTarefas.appendChild(novaTarefa)
        
        novaTarefa.textContent = tarefas




        entradaTarefas.value = ""
}