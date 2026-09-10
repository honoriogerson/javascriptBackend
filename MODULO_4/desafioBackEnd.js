const produtos = [
  {
    id: 1,
    nome: "Teclado",
    preco: 150,
    estoque: 10,
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 80,
    estoque: 0,
  },
  {
    id: 3,
    nome: "Monitor",
    preco: 900,
    estoque: 5,
  },
];

function buscarProduto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produto = produtos.find((produto) => produto.id === id);

      if (produto) {
        resolve(produto);
      } else {
        reject("Produto não encontrado");
      }
    }, 1000);
  });
}

async function consultarProduto(id) {
  try {
    const produto = await buscarProduto(id);

    console.log("Produto encontrado:");
    console.log(produto);
  } catch (erro) {
    console.log("Erro:", erro);
  }
}

consultarProduto(1);

/**
    Como retornar apenas os produtos disponíveis?

    Como calcular o valor total do estoque?

    Como simular uma atualização de estoque?

    Como simular uma operação de banco de dados?
 */
