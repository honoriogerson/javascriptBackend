//Para salvar o itens em um arquivo 
const fs = require('fs');

const estoque = [
    {
        id: 1,
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 01"
    },
    {
        id: 2,
        nome: "Pedal",
        quantidade: 5,
        localizacao: "Prateleira 02"
    },
    {
        id: 3,
        nome: "Câmbio",
        quantidade: 50,
        localizacao: "Prateleira 03"
    },
    {
        id: 4,
        nome: "Calota",
        quantidade: 100,
        localizacao: "Prateleira 02"
    }
];

/*
const estoque = {

    1: {
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 01"
    },

    2: {
        nome: "Pedal",
        quantidade: 5,
        localizacao: "Prateleira 02"
    },

    3: {
        nome: "Câmbio",
        quantidade: 50,
        localizacao: "Prateleira 03"
    },

    4: {
        nome: "Calota",
        quantidade: 100,
        localizacao: "Prateleira 02"
    }

};

    1. Qual é o nome do produto 1?
    console.log(estoque[1].nome);

    2. Qual é a quantidade do produto 3?
    console.log(estoque[3].quantidade);

    3. Altere a quantidade do produto 2 para 20.
    estoque[2].quantidade = 20;

    4. Altere a localização do produto 4.
    estoque[4].localizacao = "Prateleira 10";
    
    5. Cadastre um novo produto
    estoque[5] = {
        nome: "Farol",
        quantidade: 25,
        localizacao: "Prateleira 04"
    };

*/


// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrarProduto(nome, quantidade, localizacao) {

    const novoProduto = {
        id: estoque.length + 1,
        nome: nome,
        quantidade: quantidade,
        localizacao: localizacao
    };

    estoque.push(novoProduto);

    console.log("Produto cadastrado com sucesso!");
}


// ==========================================
// LISTAR ESTOQUE
// ==========================================

function listarEstoque() {

    for (const produto of estoque) {

        console.log(
            `ID: ${produto.id} | ` +
            `${produto.nome} | ` +
            `Estoque: ${produto.quantidade} | ` +
            `Localização: ${produto.localizacao}`
        );
    }
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto(idBuscado) {

    for (const produto of estoque) {

        if (produto.id === idBuscado) {

            console.log("\nProduto encontrado!");

            console.log(
                `ID: ${produto.id} | ` +
                `${produto.nome} | ` +
                `Estoque: ${produto.quantidade} | ` +
                `Localização: ${produto.localizacao}`
            );

            return produto;
        }
    }

    console.log("Produto não encontrado.");
}


// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

function atualizarQuantidade(idBuscado, novaQuantidade) {

    for (const produto of estoque) {

        if (produto.id === idBuscado) {

            produto.quantidade = novaQuantidade;

            console.log("Quantidade atualizada!");

            return;
        }
    }

    console.log("Produto não encontrado.");
}


// ==========================================
// DELETAR PRODUTO
// ==========================================


// ==========================================
// SALVAR OS DADOS EM UM ARQUIVO 
// ==========================================
function salvarNoArquivo() {
    // 1. Converte a nossa lista (array) em um texto no formato JSON.
    // O "null, 2" serve apenas para organizar o texto com quebras de linha 
    // e espaços, 
    // deixando o arquivo muito mais bonito e legível para humanos.
    const textoParaSalvar = JSON.stringify(estoque, null, 2);
    // 2. Escreve esse texto dentro de um arquivo chamado 'estoque.json'.
    // writeFileSync cria o arquivo se não existir, ou substitui se já existir.
    fs.writeFileSync('estoque.json', textoParaSalvar);
    console.log("\n💾 Dados salvos no arquivo 'estoque.json' com sucesso!");
}

// ==========================================
// TESTANDO O SISTEMA
// ==========================================

listarEstoque();

console.log("\n-----------------------------");

cadastrarProduto(
    "Farol",
    20,
    "Prateleira 04"
);

console.log("\n-----------------------------");

listarEstoque();

console.log("\n-----------------------------");

buscarProduto(3);

console.log("\n-----------------------------");

atualizarQuantidade(2, 30);

console.log("\n-----------------------------");

listarEstoque();

salvarNoArquivo();