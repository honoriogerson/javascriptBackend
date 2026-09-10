//#region  Relembrando Array
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pera"];

/*
Índice:     0          1          2
            ↓          ↓          ↓
         ┌───────┬──────────┬───────────┐
Array →  │ Maçã  │  Banana  │  Laranja  │
         └───────┴──────────┴───────────┘

         */

//Array é uma estrutura utilizada para armazenar uma coleção de valores.

//#endregion
//#region  Acessando os elementos

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

//#region

//#region Tamanho do array

console.log(frutas.length);

//acessando o ultimo item da lista
console.log(frutas[frutas.length - 1]);

//#endregion

//#region Alterando um elemento
frutas[1] = "Morango";

console.log(frutas);
//Const impede que a gente troque tudo no array
//#endregion

//#region Manipulando elementos
//push - no inicio
frutas.push("Laranja");
console.log(frutas);

//unshift no final
frutas.unshift("Morango");
//#endregion

//#region Deletando
//pop - remove o ultimo
frutas.pop();
console.log(frutas);

//shift 0 remove do final
frutas.shift();
console.log(frutas);

//pop e shift mosntram o elemento removido
const removida = frutas.pop();
console.log(removida);
//#endregion

//----------------------------------------------------------------------------

//#region Percorrendo Arrays
const nomes = ["Ana", "Carlos", "Maria"];

//for
for (const nome of nomes) {
  console.log(nome);
}

// forEach()
nomes.forEach((nome) => {
  console.log(nome);
});

//forEach executa uma função para cada elemento do array.
//Eles fazem algo semelhante, mas forEach é específico para percorrer
//uma coleção e executar uma ação para cada elemento.

//#endregion

//#region Médotos para array

//map
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((numero) => {
  return numero * 2;
});
console.log(dobrados);
//map cria um novo array transformando cada elemento do array original.

//filter
const numerosFilter = [10, 15, 20, 25, 30];
const maioresQue20 = numeros.filter((numero) => {
  return numero > 20;
});
console.log(maioresQue20);

/*
| Método    | Pergunta                              |
| --------- | ------------------------------------- |
| `forEach` | O que quero fazer com cada elemento?  |
| `map`     | Como quero transformar cada elemento? |
| `filter`  | Quais elementos quero manter?         |

*/

//find
// procura um elemento que satisfaça uma condição.
const numerosfind = [10, 20, 30, 40];
const numerof = numerosfind.find((n) => n > 25);
console.log(numerof);

/*
filter x find

     filter
     → retorna vários elementos

     find
     → retorna o primeiro elemento
*/

//some()
//Existe pelo menos um elemento que atende à condição?
const numerosS = [10, 20, 30, 40];
const existeMaiorQue35 = numerosS.some(n => n > 35);
console.log(existeMaiorQue35);

//every()
//Todos os elementos atendem à condição?
const todosMaioresQue5 = numeros.every(n => n > 5);
console.log(todosMaioresQue5);

//reduce()
//Eu deixaria reduce por último mesmo.
//reduce pega vários elementos e os transforma em um único resultado.
const numerosR = [10, 20, 30, 40];
const soma = numerosR.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma);

//--------------------------------------------------------------------
//Fechamento do dia
/*
     Quero criar um novo array contendo apenas os nomes dos
      produtos que estão disponíveis. 

          const produtosDisponiveis = [];

          for (const produto of produtos) {
          if (produto.estoque > 0) {
               produtosDisponiveis.push(produto.nome);
          }

          const produtosDisponiveis = produtos
               .filter(produto => produto.estoque > 0)
               .map(produto => produto.nome);
}
*/

/**
 * / 1. Declaramos o array vazio para o laço for
const produtosDisponiveisFor = [];

for (const produto of produtos) {
  if (produto.disponivel) {
    produtosDisponiveisFor.push(produto.nome);
  }  
}
console.log(produtosDisponiveisFor);

console.log("--------Com map e filter----------");

const produtosDisponiveisMap = produtos
  .filter((produto) => produto.disponivel)
  .map((produto) => produto.nome);

console.log(produtosDisponiveisMap)
 */