// Array para armazenar os livros
let livros = [];

// Função para exibir todos os livros na lista
const exibirLivros = (livrosExibir) => {
    const listaLivros = document.getElementById("listaLivros");
    listaLivros.innerHTML = ""; // Limpar lista de livros

    livrosExibir.forEach((livro, index) => {
        const livroItem = document.createElement("div");
        livroItem.className = "book-item";
        livroItem.innerHTML = `
            <strong>${livro.titulo}</strong> - ${livro.autor} (${livro.ano})
            <br>Gênero: ${livro.genero}
            <br>Avaliação: <span class="rating">${'★'.repeat(livro.avaliacao)}</span>
            <button onclick="removerLivro(${index})">Remover</button>
            <br><input type="number" min="0" max="5" id="avaliar-${index}" placeholder="Avaliação (0-5)">
            <button onclick="avaliarLivro(${index})">Avaliar</button>
        `;
        listaLivros.appendChild(livroItem);
    });
};

// Função para adicionar um novo livro
const adicionarLivro = () => {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const ano = document.getElementById("ano").value;
    const avaliacao = parseInt(document.getElementById("avaliacao").value) || 0;

    if (titulo && autor && genero && ano && avaliacao >= 0 && avaliacao <= 5) {
        const novoLivro = { titulo, autor, genero, ano, avaliacao };
        livros.push(novoLivro);
        salvarLivros();
        exibirLivros(livros);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
};

// Função para limpar os campos de entrada
const limparCampos = () => {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("avaliacao").value = "";
};

// Função para buscar livros pelo título, autor ou gênero
const buscarLivro = () => {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(busca) ||
        livro.autor.toLowerCase().includes(busca) ||
        livro.genero.toLowerCase().includes(busca)
    );
    exibirLivros(resultados);
};

// Função para classificar os livros por título, autor ou avaliação
const classificarLivros = (criterio) => {
    const livrosClassificados = [...livros].sort((a, b) => {
        if (criterio === 'avaliacao') {
            return b[criterio] - a[criterio];
        }
        return a[criterio].localeCompare(b[criterio]);
    });
    exibirLivros(livrosClassificados);
};

// Função para remover um livro da lista
const removerLivro = (index) => {
    livros.splice(index, 1);
    salvarLivros();
    exibirLivros(livros);
};

// Função para avaliar um livro existente
const avaliarLivro = (index) => {
    const novaAvaliacao = parseInt(document.getElementById(`avaliar-${index}`).value);
    if (novaAvaliacao >= 0 && novaAvaliacao <= 5) {
        livros[index].avaliacao = novaAvaliacao;
        salvarLivros();
        exibirLivros(livros);
    } else {
        alert("Por favor, insira uma avaliação entre 0 e 5.");
    }
};

// Função para salvar os livros no arquivo JSON (localStorage como exemplo)
const salvarLivros = () => {
    localStorage.setItem('livros', JSON.stringify(livros));
};

// Função para carregar os livros do arquivo JSON (localStorage como exemplo)
const carregarLivros = () => {
    const livrosSalvos = localStorage.getItem('livros');
    if (livrosSalvos) {
        livros = JSON.parse(livrosSalvos);
    }
    exibirLivros(livros);
};

// Carregar livros ao iniciar a aplicação
window.onload = carregarLivros;
