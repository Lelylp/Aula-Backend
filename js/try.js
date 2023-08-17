/* try {
    let resultado = 10/0;
    if (resultado === Infinity) {
        throw 'Sem zero amigao';
    }
    console.log("O resultado é:", resultado);
} catch (error) {
    // console.error("Erro: ", error.message);
    console.error("Erro: ", error);
}
console.log("O resultado é:", resultado); */

//quest 1
try {
    let num = require('readline-sync').question("Digite um número: ");
    if (isNaN(num)) {
        throw 'Somente números'
    }
    let resultado = Number(num)/0;
    if (resultado === Infinity) {
        throw 'Divisão por zero'
    }
} catch (e) {
    console.error("Erro:", e)
}
//quest 2
try {
    let texto = require('readline-sync').question("Digite um texto: ");
    texto = parseInt(texto);
    if (isNaN(texto)) {
        throw 'Conversão inválida'
    }
} catch (e) {
    console.error("Erro:", e);
}
//quest 3
try {
    let pessoa = {
        nome: require('readline-sync').question("Digite seu nome: "),
        idade: require("readline-sync").questionInt("Digite sua idade: "),
    }
    let variavel = console.log(pessoa.carteira);
    if (variavel == undefined) {
        throw 'Propriedade não encontrada'
    }
} catch (error) {
    console.error("Erro:", error);
}