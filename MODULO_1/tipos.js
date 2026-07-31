const nome = "Gerson";
const idade = 38;
const programador = true;

console.log(typeof nome);

//Todas armazenam as mesma coisa? 

// ##########PRIMITIVOS

/* 
    string
    number
    boolean
    undefined
    null
    *bigint
    *symbol
*/


// ############ESTRUTURADOS

/*
    *object
    array
*/

// ----- String 
//Exemplos 

//string
const nome = "Maria";
const cidade = 'São Paulo';
const idade = 20;
const altura = 1.75;
const possiTatuagem = true;

//Forma 1 - interpolação de string
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//Forma 2 - concatenação de string
console.log("Meu nome é " + nome + 
    " e tenho " + idade + " anos.");



const altura = 1.75;
const temperatura = -10;
console.log(typeof altura);
console.log(typeof temperatura);

//Boolean 
let maiorDeIdade = true;
const idade = 18;

if (idade >= 18) {
    console.log("Ele e Maior de idade");
} 
else {
    console.log("Ele e Menor de idade");
    maiorDeIdade = false;
    console.log(maiorDeIdade);
}
console.log(maiorDeIdade);

//-------------------------------
//Undefined e null

let nome;

console.log(nome);

/*undefined significa, de maneira simplificada, que uma 
variável existe, mas ainda não possui um valor definido. */

let usuario = null;
console.log(usuario);

/*
undefined
→ não foi definido um valor

null
→ eu estou dizendo explicitamente que não existe valor */