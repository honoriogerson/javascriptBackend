//Atividade 1 - Sistema de aluno
const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",

    endereco: {
        cidade: "São José dos Campos",
        estado: "SP"
    },

    ativo: true,

    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
};

//1 - Motrar: Nome, Idade, Curso, Cidade, Estado
//2 - Alterar a cidade
//3 - Adicionar email 
//4 - Use o destructuring de alguma forma
//5 - Criar uma cópia utilizando spread para alunoAtualizado
//6 - Transformar o objeto em JSON
//7 - Voltar de JSON para objeto

//Atividade 2 -----------------------------------

const usuario = {
    id: 1,
    nome: "Claudia Raia",
    email: "claudia@email.com",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        numero: 145
    }
};

/*

    1 - Como acessar o nome?
    2 - Como acessar a cidade?
    3 - Como alterar a idade?
    4 - Como adicionar telefone?
    5 - Como remover o email?
    6 - Como criar uma cópia do usuário?
    7 - Como extrair somente nome e cidade?
    8 - Como transformar o objeto em JSON?
    9 - Como transformar o JSON novamente em objeto
*/