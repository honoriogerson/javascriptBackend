/*
//Declarar as constantes 
const valor = 400; 
const desconto = 20;
//Constante com calculo do valorFinal 
const valorFinal = calcularDesconto(valor, desconto);

//Chamas das funções 
calculoImposto(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

// #region Funções
function calcularDesconto(valor, desconto){
    return valor - desconto;   
}
//Imposto sobre produto
function calculoImposto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}
//Regra CashBack
function cashBack(valorFinal){
    if(valorFinal > 50){
        const cashBack = valorFinal*0.10;
        console.log("Valor do CashBack: " + cashBack);
    }
}

function parcelamento(valorFinal){
    if (valorFinal > 399) {
        // Compras acima de 399: sem juros
        const valorParcelado = valorFinal / 6;
        console.log("Valor das parcelas 6x sem juros: R$ " + valorParcelado); 
        
    } else if (valorFinal >= 100) {
        // Compras entre 100 e 399: com 2% de juros no total
        const valorParcelado = (valorFinal * 1.02) / 6;
        console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado); 
        
    } else {
        // Compras abaixo de 100: não parcela
        console.log("O valor não atinge o mínimo de R$ 100 para parcelamento.");
    }
}
//#endregion

//-------------------------------------------------------

//função tradicional 
function somarTra(numero1, numero2){
    return numero1 + numero2; 
}

//Arrow function 
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log("Tradicional", somarTra(8 ,3));
somar(8, 3);
//---------------------------
*/

function mostrarNome() {
    const nome = "Gerson";
    console.log(nome);
}
mostrarNome();
console.log(nome); 


if (true) {
    const mensagem = "Olá";
}
console.log(mensagem);


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