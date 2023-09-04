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

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// Crie um array vazio para representar o carrinho de compras
const carrinhoDeCompras = [];

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
  const carrinhoElement = document.getElementById("itens-carrinho");
  const totalElement = document.getElementById("total-carrinho");

  // Limpe o conteúdo do carrinho antes de atualizá-lo
  carrinhoElement.innerHTML = "";

  let total = 0;

  // Percorra o carrinho e adicione os itens ao elemento HTML
  for (const item of carrinhoDeCompras) {
    const itemElement = document.createElement("li");
    itemElement.textContent = `${item.nome} - $${item.preco}`;
    carrinhoElement.appendChild(itemElement);
    total += item.preco;
  }

  // Atualize o total do carrinho
  totalElement.textContent = total;
}

// Percorra o catálogo e adicione um evento de clique aos botões "Adicionar"
for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div id="card-produto">
    <img src="./assets/img/${produtoCatalogo.nomeArquivoImagem}"
     alt="Produto 1" 
     style="height: 300px" 
    />
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button onclick="adicionarAoCarrinho(${produtoCatalogo.id})">Adicionar</button>
    </div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto;
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produtoId) {
  // Encontre o produto pelo ID no catálogo
  const produto = catalogo.find((item) => item.id === produtoId);

  // Adicione o produto ao carrinho de compras
  carrinhoDeCompras.push(produto);

  // Atualize a exibição do carrinho
  atualizarCarrinho();
}


