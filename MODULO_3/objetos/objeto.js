//#region  1 - Objeto start 

/*
    Um objeto representa uma "coisa" do mundo real através de 
    propriedades e comportamentos.

*/

const aluno = {
    nome: "João",
    idade: 20,
    curso: "ADS"
};

/*
    aluno
    │
    ├── nome → "João"
    ├── idade → 20
    └── curso → "ADS"
*/

//como as coisas vão chegar para gente do front na maiorias das vezes

//fomato JSON
/*
    {
        "id": 1,
        "nome": "João",
        "curso": "ADS"
    }
*/
//#endregion

//#region  Criando um objeto

const pessoa = {
    nome: "Carlos",
    idade: 30
};

/*
    pessoa → variável
    { } → objeto
    nome → propriedade
    "Carlos" → valor da propriedade
    idade → propriedade
    30 → valor da propriedade
*/
//#endregion

//#region Tipo de valores

//podem armazenar praticamente qualquer tipo

//Exemplo 1 
const usuario = {
    nome: "Gerson",
    idade: 35,
    ativo: true,
    email: null
};

//Exemplo 2 
const produto = {
    nome: "Notebook",
    preco: 3500,
    categorias: ["tecnologia", "informática"]
};

//Exemplo 3 
const aluno = {
    nome: "João",
    idade: 20,

    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

//#endregion

//#region Acessando propriedades do objeto 

const pessoa = {
    nome: "João",
    idade: 20
};

console.log(pessoa.nome);
console.log(pessoa.idade);

//Essa forma vai ser importantes para gente no futuro
const propriedade = "nome";

console.log(pessoa[propriedade]);

//#endregion

//#region Alterado os valores de propriedades 
const pessoa = {
    nome: "João",
    idade: 20
};

pessoa.idade = 21;

console.log(pessoa);

//Alterando, lembrando sobre imutabilidade  mas permite retribuição de parte do objeto
const pessoa = {
    nome: "João"
};

pessoa.nome = "Carlos";

//#endregion

//#region Adicionando propriedades

const pessoa = {
    nome: "João"
};

pessoa.idade = 20;
pessoa.cidade = "São Paulo";

console.log(pessoa);

//Importante quando você quer adicionar outras coisas no final do objeto
//#endregion

//#region Removendo propriedades
delete pessoa.idade;
//#endregion

//#region Atividade 1  
/*
    const filme = {
    titulo: "...",
    ano: 2026,
    genero: "..."

    - mostrar o título;
    - alterar o ano;
    - adicionar diretor;
    - remover genero;
    - mostrar o objeto final.
};
*/
//#endregion

//#region Objetos com métodos
const pessoa = {
    nome: "João",
    idade: 20,

    apresentar: function() {
        console.log("Olá!" + pessoa.nome);
    }
};
pessoa.apresentar();
//#endregion

//#region "this"  
const pessoa = {
    nome: "João",
    idade: 20,

    apresentar() {
        //Dentro de um método de um objeto, this normalmente representa o 
        //próprio objeto que está executando aquele método.
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.apresentar();

/*
    this.nome significa pessoa.nome nesse contexto.
*/

//#endregion

//#region Objeto aninhado
const aluno = {
    nome: "Tufão",
    idade: 20,

    endereco: {
        rua: "Av. Brasil",
        numero: 100,
        cidade: "São Paulo"
    }
};
//acessando 
console.log(aluno.endereco.cidade);

//outro exemplo 
const pedido = {
    id: 1001,

    cliente: {
        nome: "João",
        email: "joao@email.com"
    },

    pagamento: {
        tipo: "cartao",
        aprovado: true
    }
};
//#endregion

//#region Destructuring
const pessoa = {
    nome: "João",
    idade: 20,
    cidade: "São Paulo"
};

//nomalmente 
console.log(pessoa.nome);
console.log(pessoa.idade);

//com desestruturação
const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

//renomeando com destructing 
const pessoa = {
    nome: "João"
};

const { nome: nomePessoa } = pessoa;

console.log(nomePessoa);

//#endregion

//#region Spread Operator
const pessoa = {
    nome: "João",
    idade: 20
};

const pessoaAtualizada = {
    ...pessoa,
    idade: 21
};

// ... "é como Pegue as propriedades desse objeto e coloque aqui."

//exemplos 2 
const dados = {
    nome: "João",
    idade: 20
};

const usuario = {
    ...dados,
    ativo: true
};

//#endregion 

//#region  Object.keys, Object.values e Object.entries

const pessoa = {
    nome: "João",
    idade: 20,
    cidade: "São Paulo"
};

//chaves do objeto
console.log(Object.keys(pessoa));

//valores do objeto
console.log(Object.values(pessoa));

//chave e valor relacionado 
console.log(Object.entries(pessoa));

//#endregion

//#region Arranhado a superficie do JSON 

//objeto x JSON
const pessoa = {
    nome: "João",
    idade: 20
};

//Objeto passando para JSON  
const json = JSON.stringify(pessoa);
console.log(json);

//Json para objeto pegando um item 
const objeto = JSON.parse(json);
console.log(objeto.nome);
//#endregion
