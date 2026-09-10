/**
 * "Se você pedir uma operação que demora.
 *  O Node.js não precisa ficar parado esperando ela terminar."
 */

//#region start
//exemplo 1
console.log("1");

console.log("2");

console.log("3");

//Até aqui tudo é síncrono.

//exemplo 2
console.log("Início");

//O setTimeout é uma função que recebe dois parâmetros:
// uma função e um tempo em milissegundos.
//  A função passada como primeiro parâmetro será executada após o tempo
//  especificado no segundo parâmetro.
setTimeout(() => {
  console.log("Operação terminou");
}, 2000);

console.log("Fim");

//"Por que Fim apareceu antes de Operação terminou?"

// Existe um tipo de operação que pode terminar depois.
// O JavaScript permite que continuemos executando o programa enquanto
// aguardamos essa operação.

//#endregion

//#region Callbacks

/**
 * Callback é uma função passada para outra função para ser executada
 *  posteriormente ou em determinado momento.
 */

numeros.forEach((numero) => {
  console.log(numero);
});

/**
 *  numero => {
    console.log(numero);
}
    é uma função passada para forEach.

    Então eles já conhecem callback, só não conheciam o nome.
 */
//#endregion

//#region Vamos criar um novo exemplo de callback

function executar(callback) {
  console.log("Executando alguma coisa...");
  callback();
}

executar(() => {
  console.log("Finalizado!");
});

//=======
function processarUsuario(nome, callback) {
  console.log(`Processando ${nome}...`);
  callback();
}

processarUsuario("João", () => {
  console.log("Usuário processado!");
});

//Simulando uma operação mais demorada.

function buscarUsuario(callback) {
  setTimeout(() => {
    const usuario = {
      id: 1,
      nome: "João",
    };

    callback(usuario);
  }, 2000);
}

console.log("Início");

buscarUsuario((usuario) => {
  console.log(usuario);
});

console.log("Fim");

//Imaginem que buscarUsuario() não está esperando dois segundos.
//Ela está fazendo uma requisição HTTP para um servidor.

//O problema do callback
buscarUsuario((usuario) => {
  buscarPedidos(usuario.id, (pedidos) => {
    buscarProdutos(pedidos, (produtos) => {
      calcularTotal(produtos, (total) => {
        console.log(total);
      });
    });
  });
});
//Callbacks resolvem o problema da execução assíncrona,
// mas quando várias operações dependem umas das outras,
// o código pode ficar difícil de ler e manter.
//#endregion

//#region Promises
//Uma Promise é uma promessa de que teremos um resultado no futuro.

//Criando uma Promise
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operação concluída!");
  }, 2000);
});

//consumindo uma Promise
//then() é um método que recebe uma função de callback 
// que será executada quando a Promise for resolvida.
promessa.then((resultado) => {
  console.log(resultado);
});

//#endregion

//#region tratando erros
const promessa = new Promise((resolve, reject) => {
  const sucesso = false;

  if (sucesso) {
    resolve("Tudo certo!");
  } else {
    reject("Algo deu errado!");
  }
});

//consumindo
promessa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });

/**
    then()
        ↓
        sucesso

    catch()
        ↓
        erro
 */
