const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

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