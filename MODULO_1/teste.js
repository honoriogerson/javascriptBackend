const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron", valor: 54400, pago: true }
]

//Dado o array acima, mostre somente o pedidos pagos 

for(let i = 0; i < pedidos.length; i++){
    //verifacar se pedido é "pago" é true
    if(pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
} 

// com for..of 
for(let pedido of pedidos){
    if(pedido.pago === true){
        console.log(pedido);
    }
}