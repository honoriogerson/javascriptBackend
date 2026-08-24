/*
    Relembrando o conceito de objeto 
    No desenvolvimento backend com JavaScript (como no Node.js), um objeto é uma 
    estrutura de dados mutável que armazena pares de chave-valor. 
    Ele representa entidades do mundo real ou do sistema, 
    como usuários, requisições HTTP e conexões com bancos de dados.

    -const pessoa [] - array
    -const pessoa {} - objeto 

*/

//Cadastro de usuário 

function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };
}
const usuario = cadastroUsuario(1, "Gersão","AlunoMorreu#23", 98765456789, 
                            "x@gmail,com");

//console.log(usuario);

//Com objeto eu agora consigo melhorar a que é exibido. 

console.log("Oi" + usuario.nome + "seu cadastro foi realizado com sucesso!")