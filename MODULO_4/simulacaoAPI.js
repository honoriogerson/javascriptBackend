//#region Simulação de uma chamada para uma API - com Promises

function buscarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "João",
        email: "joao@email.com",
      };

      resolve(usuario);
    }, 2000);
  });
}

/*
console.log("Buscando usuário...");

buscarUsuario()
  .then((usuario) => {
    console.log("Usuário encontrado:");
    console.log(usuario);
  })
  .catch((erro) => {
    console.log("Erro:", erro);
  });
*/
//Vamos debugar o código para entender melhor o que está acontecendo.
//Agora temos uma função que representa algo muito
//parecido com uma chamada para um banco ou uma API.
//=========================================================================

//#endregion
function buscarPedidos(usuarioId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pedidos = [
        { id: 1, produto: "Notebook", valor: 3500 },
        { id: 2, produto: "Mouse", valor: 100 },
      ];

      resolve(pedidos);
    }, 2000);
  });
}

//#region Simulação de uma chamada para uma API - com async/await
async function executar() {
  const usuario = await buscarUsuario(1);

  console.log("Usuário:");
  console.log(usuario);

  const pedidos = await buscarPedidos(usuario.id);

  console.log("Pedidos:");
  console.log(pedidos);
}

executar();

/*
await não significa "congele o Node.js inteiro". Ele faz a função
 assíncrona aguardar a Promise para continuar aquela sequência,
  enquanto o ambiente pode continuar tratando outras tarefas.
  */

//#endregion