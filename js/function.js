/*function exibirSaudacao(nome, dia, mes) {
    console.log(`Bom dia, ${nome}, hoje é ${dia} de ${mes}`);
}
exibirSaudacao("Weslley", 8, "agosto");
*/

//quest 1
function saudacao() {
    console.log("Olá, mundo!");
}

//quest 2
function dobro(num) {
    console.log(`O dobro de ${num} é: ${num*2}`);
}

//quest 3
function mostrarNumeros(inicio, fim) {
    console.log(`inicio é ${inicio} e fim é ${fim}`);
    for (inicio; inicio <= fim; inicio++) {
        console.log(inicio);
    }
}

//quest 4
function verificarPar(num) {
    if (num%2 ===0) {
        console.log(`${num} é par`);
    } else {
        console.log(`${num} é ímpar`);
    }
}

//quest 5
function imprimirLista(array) {
    array.forEach(i => {
        console.log(`elemento ${i}`);
    });
}

//quest 6
function calcularMedia(array) {
    let media = 0;
    array.forEach(i =>{
        media += i;
    })
    return media /= array.length;
}

//quest 7
function maiorNumero(array) {
    let maior = 0;
    array.forEach(i =>{
        if (i > maior) {
            maior = i;
        }
    })
    console.log(maior);
}

//quest 8
function contarVogais(texto) {
    let letras = texto.split("");
    let vogais = 0;
    letras.forEach(i=>{
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
            vogais++;
        }
    })
    console.log(vogais);
}

//quest 9
function imprimirTabuada(num1) {
    for (let index = 1; index <= 10; index++) {
        console.log(index*num1);
    }
}

//quest 10
function verificarPrimo(num1) {
let cos = 1;
let count = 0;
do {
    if(num1%cos == 0){
        count++;
        cos++;
        if(count == 3){
            break;
        }
    }else{
        cos++;
    }

} while (cos>=0);
    if (count == 2) {
        console.log("Seu número é primo");
    } else {
        console.log("Seu número nao é primo");
    }
}

saudacao();
//2
let numero = require("readline-sync").questionInt("Digite um número: ");
dobro(numero);
//3
let num1 = require("readline-sync").questionInt("Digite o inicio: ");
let num2 = require("readline-sync").questionInt("Digite o fim: ");
mostrarNumeros(num1, num2);
//4
numero = require("readline-sync").questionInt("Digite um número para saber se é par: ");
verificarPar(numero);
//5
let numeros = Array(4);
for (let index = 0; index < numeros.length; index++) {
    numeros[index] = (numero = require("readline-sync").questionInt("Digite um número ir para a lista -> "))
}
imprimirLista(numeros);
//6
console.log("Vai ser calculada a média da lista anterior");
console.log(`A média é ${calcularMedia(numeros)}`);
//7
console.log("Vai ser mostrado o maior número da lista");
maiorNumero(numeros);
//8
let texto = require("readline-sync").question("Digite um texto para saber quantas vogais tem: ");
contarVogais(texto);
//9
numero = require("readline-sync").questionInt("Digite um número para saber a tabuada de 1 a 10: ");
imprimirTabuada(numero);
//10
let primo = require("readline-sync").questionInt("Digite um número para saber se é primo: ");
verificarPrimo(primo);