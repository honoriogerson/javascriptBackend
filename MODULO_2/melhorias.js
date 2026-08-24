
//Const
const inputValorCompra = 500; 
const inputValorDesconto = 20; 
//Calculo de Valor final com desconto
const valorFinal = calcularDesconto(inputValorCompra, inputValorDesconto);

//Chamadas de funcões
calculoImposto(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

//#region Tudo pode vira função

// Desconto
function calcularDesconto(inputValorCompra, inputValorDesconto){
    return inputValorCompra - inputValorDesconto;
}

//Imposto sobre produto
function calculoImposto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}

//Regra CashBack
function cashBack(){
    if(valorFinal > 50){
        const cashBack = valorFinal*0.10;
        console.log("Valor do CashBack: " + cashBack);
    }
}

//Parcelamento
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




