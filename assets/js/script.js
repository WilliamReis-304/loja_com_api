async function fetchData(){
    const response = await fetch('https://fakestoreapi.com/products');
    tempData = await response.json();
    for (objeto of tempData){
        criarVitrine(objeto);
    }

}

function criarVitrine(obj){
    divProdutos = document.getElementById('produtos')
    divProduto = document.createElement("div")
    divProduto.id='produto'
    divImagem = document.createElement("div")
    divImagem.id = 'imagem'
    img = document.createElement('img')
    img.src = obj.image
    h1 = document.createElement('h1')
    h1.innerText = obj.title
    descricao = document.createElement('p')
    descricao.innerText = obj.description
    preco = document.createElement('h3')
    preco.innerText = 'U$ ' + obj.price
    avaliacao = document.createElement('h6')
    avaliacao.innerText = obj.rating.rate + " / 5.0"
    botao = document.createElement('button')
    botao.innerText = 'Adicionar ao Carrinho +'
    botao.classList = "btn btn-outline-success"
    botao.id = obj.id
    divImagem.append(img)
    divProduto.append(divImagem,h1,avaliacao,preco,descricao,botao)
    divProdutos.append(divProduto)
}

function adicionarItem(obj){
    let carrinho = document
    divCarrinho = carrinho.getElementById('carrinho')
    listaCarrinho = carrinho.getElementById('ol')
    liItens = carrinho.createElement("li")
    liItens.id='itens'
    divImagem = carrinho.createElement("div")
    divImagem.id = 'imagem'
    img = carrinho.createElement('img')
    img.src = obj.image
    preco = carrinho.createElement('h3')
    preco.innerText = 'U$ ' + obj.price
    h1 = carrinho.createElement('h1')
    h1.innerText = obj.title
    descricao = carrinho.createElement('p')
    descricao.innerText = obj.description
    botao = carrinho.createElement('button')
    botao.innerText = 'Remover Item do Carrinho -'
    botao.classList = "btn btn-outline-danger"
    divImagem.append(img)
    divProduto.append(divImagem,h1,avaliacao,preco,descricao,botao)
    divCarrinho.append(divItens)
}

fetchData()

botao.addEventListener("click",adicionarItem(this.id))