// Função para adicionar uma nova tarefa
const adicionarTarefa = () => {
    const tarefaInput = document.getElementById("tarefaInput");
    const tarefaTexto = tarefaInput.value.trim(); // Remover espaços em branco

    if (tarefaTexto === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Criar um novo item de lista (li) para a tarefa
    const li = document.createElement("li");

    // Criar um checkbox para marcar a tarefa como concluída
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => marcarConcluida(li);

    // Criar um botão para remover a tarefa
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.onclick = () => removerTarefa(li);

    // Adicionar o checkbox, o texto da tarefa e o botão ao item da lista
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(tarefaTexto));
    li.appendChild(botaoRemover);

    // Adicionar o item de lista à lista de tarefas
    document.getElementById("listaTarefas").appendChild(li);

    // Limpar o campo de entrada de texto
    tarefaInput.value = "";
};

// Função para marcar uma tarefa como concluída
const marcarConcluida = (li) => {
    li.classList.toggle("completed");
};

// Função para remover uma tarefa
const removerTarefa = (li) => {
    li.remove();
};
