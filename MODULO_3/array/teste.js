/*
Quero criar um novo array contendo apenas os nomes dos
      produtos que estão disponíveis. 

      const produtosDisponiveis = [];
*/

const produtos = [
  { nome: "Produto 1", disponivel: true },
  { nome: "Produto 2", disponivel: false },
  { nome: "Produto 3", disponivel: true },
  { nome: "Produto 4", disponivel: true },
];

console.log("--------Com for...of----------");

const produtosDisponiveis = [];

for (const produto of produtos) {
  if (produto.disponivel) {
    produtosDisponiveis.push(produto.nome);
  }
}
console.log(produtosDisponiveis);

//---------------------------
console.log("--------Com map e filter----------");

const prodDisponiveisMap = produtos
  .filter((produto) => produto.disponivel === true)
  .map((produto) => produto.nome);

console.log(prodDisponiveisMap);