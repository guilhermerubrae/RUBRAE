const catalogo = [
    {
        id: 1,
        marca: "RUBRAE",
        nome: "Casaco Main",
        preco: 799,
        nomeArquivoImagem: "produto-1.jpg",
        masculine: true,
    },
    {
        id: 2,
        marca: "RUBRAE",
        nome: "Casaco Section",
        preco: 799,
        nomeArquivoImagem: "produto-2.jpg",
        masculino: true,
    },
    {
        id: 3,
        marca: "RUBRAE",
        nome: "Casaco Footer",
        preco: 799,
        nomeArquivoImagem: "produto-3.jpg",
        masculine: true,
    },
    {
        id: 4,
        marca: "RUBRAE",
        nome: "Casaco Header",
        preco: 799,
        nomeArquivoImagem: "produto-4.jpg",
        masculino: true,
    },
    {
        id: 5,
        marca: "RUBRAE",
        nome: "Casaco Input",
        preco: 799,
        nomeArquivoImagem: "produto-5.jpg",
        masculine: true,
    },
    {
        id: 6,
        marca: "RUBRAE",
        nome: "Casaco Label",
        preco: 799,
        nomeArquivoImagem: "produto-6.jpg",
        masculino: true,
    },
    {
        id: 7,
        marca: "RUBRAE",
        nome: "Casaco Source",
        preco: 799,
        nomeArquivoImagem: "produto-7.jpg",
        masculine: true,
    },
    {
        id: 8,
        marca: "RUBRAE",
        nome: "Casaco Constant",
        preco: 799,
        nomeArquivoImagem: "produto-8.jpg",
        masculino: true,
    },

];

for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div id="card-produto">
    <img src="./assets/img/${produtoCatalogo.nomeArquivoImagem}"
     alt="Produto 1" 
     style="height: 300px" 
    />
    <p>${produtoCatalogo.marca}</p>
    <P>${produtoCatalogo.nome}</P>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
}

