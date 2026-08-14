//#region ante só true or false 
const idade = 20;

console.log(idade >= 18);

//agora podemos tomar decisões com esse resposta 
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
}
//#endregion

//#region if e else
const idade = 16;

// em js usamos as chaves para delimitar um bloco de código
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//podemos encadar diversor if e else 
    const nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//O Js vai executar o primeiro e se for verdadeiro ele para. 
//um exemplo com ploblemas 
const nota = 9;

if (nota >= 5) {
    console.log("Recuperação");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 9) {
    console.log("Excelente");
}

//#endregion

//#region Condições compostas

//1
const idade = 20;
const ativo = true;

if (idade >= 18 && ativo) {
    console.log("Usuário autorizado");
}

//2 
const pagamentoPix = true;
const pagamentoCartao = false;

if (pagamentoPix || pagamentoCartao) {
    console.log("Pagamento disponível");
}

//#endregion

//#region switch case
const dia = 4;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
        console.log("Terça-feira");
        break;
    
    case 4:
        console.log("Sexta-feira");
        break;

    //quando não se sabe o que vai acontecer, podemos usar o default.
    default:
        console.log("Dia inválido");
}

/*
 Quando usar o switch case?
 - Quando temos muitas condições para verificar.
 - Quando temos uma variável que pode ter muitos valores diferentes.
 - Quando queremos deixar o código mais legível.

 Quando usar if/else?
    - Quando temos poucas condições para verificar.
*/

//#endregion

//#region operador ternário

//essa forma 
const idade = 20;

let mensagem;

if (idade >= 18) {
    mensagem = "Maior";
} else {
    mensagem = "Menor";
}
//pode ser substituida por essa forma
const mensagem = idade >= 18 ? "Maior" : "Menor";

//condição ? valor_se_true : valor_se_false

/*
    Quando usar o operador ternário?
    - Quando temos uma condição simples.
    - Quando queremos deixar o código mais legível.
*/

//#endregion

//#region laços 

//#region for 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// para entender  a sintaxe do for, podemos dividir em 3 partes:
/*
    for (inicialição; condição; incremento) {
        //bloco de código
    }
*/
//#endregion

//#region for...of

// o  for ... of é importante para percorrer arrays, strings e outros objetos iteráveis.
const frutas = ["banana","maçã", "laranja"];

for (const fruta of frutas) {
    console.log(fruta);
}

//se fosse o for normal 
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
//#endregion

//#region while

//enquanto a condição for verdadeira, o bloco de código será executado.

let contador = 1;

while (contador <= 5) {
    console.log(contador);

    contador++;
}
//*Cuidado com loop infinito.
//#endregion

//#endregion

//#region atividades 

// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.

//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.

//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.

//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.

//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 

//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/

//Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
*/

//#endregion