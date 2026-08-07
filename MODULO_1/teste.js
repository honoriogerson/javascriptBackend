//Forma 1 - culculando milisgundos 

const dataNascimento = new Date("2025-05-15");
const ativo = true;

// Transformando 18 anos em milissegundos
const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

//comparando milissegundos com milissegundos!
const podeAcessar = (new Date() - dataNascimento) >= 
            dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar);


//#region 2 Usando funções extras. 
/*
const dataNascimento = new Date("2025-02-29");
const ativo = true;

const hoje = new Date();
const podeAcessar = dataNascimento <= new Date(hoje.getFullYear() - 18, hoje.getMonth(), hoje.getDate()) && ativo;

console.log(podeAcessar);
*/
//#endregion