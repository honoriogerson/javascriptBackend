//Se eu criar uma variável, ela pode ser usada em qualquer lugar do programa?

//A resposta é: depende do escopo.

//#region Escopo Global 

const nome = "Gerson";

function mostrarNome() {
    console.log(nome);
}

mostrarNome();

//Váriavel criada fora da função 
/*
    ESCOPO GLOBAL
    │
    ├── nome
    │
    └── função mostrarNome()
            │
            └── consegue acessar nome
*/

//#endregion

//#region Escopo de Função

function mostrarNome() {
    const nome = "Gerson";

    console.log(nome);
}

mostrarNome();

console.log(nome);

//testa, gera erro porque só existe dentro da funça a variável

//#endregion

//#region Escopo de Bloco

if (true) {
    const mensagem = "Olá";
}

console.log(mensagem);

// erro - constante foi ciada no bloco

//#endregion

//#region  Exemplo tudo junto 

const global = "Estou no escopo global";

function exemplo() {

    const funcao = "Estou dentro da função";

    if (true) {
        const bloco = "Estou dentro do bloco";

        console.log(global);
        console.log(funcao);
        console.log(bloco);
    }

    console.log(global);
    console.log(funcao);

    // console.log(bloco); ERRO
}

exemplo();

console.log(global);

// console.log(funcao); ERRO

 
