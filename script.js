// Função para adicionar uma nova nota
const adicionarNota = () => {
    const notaInput = document.getElementById("notaInput");
    const notaTexto = notaInput.value.trim(); // Remover espaços extras

    if (notaTexto === "") {
        alert("Por favor, digite uma nota.");
        return;
    }

    // Criar um novo item de lista (li) para a nota
    const li = document.createElement("li");
    li.innerHTML = `${notaTexto} <button onclick="excluirNota(this)">Excluir</button>`;

    // Adicionar o item de lista à lista de notas
    document.getElementById("listaNotas").appendChild(li);

    // Limpar o campo de entrada de texto
    notaInput.value = "";
};

// Função para excluir uma nota
const excluirNota = (botaoExcluir) => {
    const li = botaoExcluir.parentElement; // Encontrar o item de lista pai do botão
    li.remove(); // Remover o item de lista
};
