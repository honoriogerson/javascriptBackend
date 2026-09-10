//#region async/await

//O async/await é uma forma mais simples de trabalhar com Promises.
//antes
buscarUsuario()
    .then(usuario => {
        console.log(usuario);
    });

//depois
async function buscarUsuarioAsync() {
    const usuario = await buscarUsuario();
    console.log(usuario);
}

//Tratamento de erro com async/await
async function executar() {

    try {

        const usuario = await buscarUsuario();

        console.log(usuario);

    } catch (erro) {

        console.log("Erro:", erro);

    }

}