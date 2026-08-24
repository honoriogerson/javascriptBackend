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