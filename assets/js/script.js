async function fetchData(){
    const response = await fetch('https://fakestoreapi.com/products');
    tempData = await response.json();
    for (objeto of tempData){
        criarVitrine(objeto);
    }

}

fetchData()

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
    divImagem.append(img)
    divProduto.append(divImagem,h1,avaliacao,preco,descricao,botao)
    divProdutos.append(divProduto)
}

