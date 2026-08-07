//#region Start Operadores
//Exemplo de operador de comparação
const idade = 20;

console.log(idade >= 18);

//A resposta é true ou seja, comparou valores.

//#endregion

//#region Operadores matemáticos
const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //Resto da divisão
//#endregion

//#region Operadores de comparação
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b);

/*
    Regra de profissional

        Prefira === e !== no JavaScript moderno.
 */


//#endregion

//#region Exercício
/*
    Exercício:aplicando operadores de comparação com 
    variáveis.
    Faça a comparações a partir da váriável informada.
*/

const idade1 = 20;
const idade2 = 25;

//#endregion

//#region Operadores lógicos

const idade3 = 20;
const idade4 = 25;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18); //Todas precisam ser verdadeiras.

//Operador lógico OR
console.log(idade3 > 18 || idade4 > 18); //Uma precisa ser verdadeira.

//Operador lógico NOT
console.log(!(idade3 > 18)); //Inverte o valor da expressão.

//#endregion

//#region Combinando operadores
const idade = 25;
const matriculaAtivo = true;

//um conceito que ja usamos em py, que é atribuir o resultado direta em uma variável.
const podeComprar = idade >= 18 && matriculaAtivo;

console.log(podeComprar);
//#endregion

//#region Operadores de incremento e decremento
let numero = 10;
console.log(numero++); //10
console.log(numero); //11
console.log(++numero); //12 

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10
//#endregion

//#region Exercício 1 - Comparação
//Faça comparação a partir da variável informada
const x = 5;
const y = 10;
//#endregion

//#region Exercício 2 - == vs ===
//verifique os resultados das comparações a seguir
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
//#endregion

//#region Exercício 3 - Sistema de acesso - Desafio
const dataNascimento = new Date("2000-02-29");
const ativo = true;
/*
    Crie uma expressão que indique se o usuário pode 
    acessar o sistema.
    
    Regra: O usuário precisa ter pelo menos 18 anos
     E estar ativo.
*/
//#endregion

//#region Exercício 4 - Loja - Desafio
/*
    Sistema de desconto

      Uma loja dará desconto para o cliente se:

        Regra 1: compra maior ou igual a R$ 500.

        OU

        Regra 2: cliente seja VIP.
        
        Os clientes: 

        1)
        const valorCompra = 350;
        const clienteVip = true;

        2)
        const valorCompra = 874;
        const clienteVip = false;


        3)
        const valorCompra = 20;
        const clienteVip = true;

        4)
        const valorCompra = 499;
        const clienteVip = false;
 */
//#endregion