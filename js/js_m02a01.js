/* //quest 1
let nome = require('readline-sync').question("Digite seu nome: ");
let notas = Array(3);
let media = 0;
for (let i = 0; i < notas.length; i++) {
    notas[i] = require('readline-sync').questionInt("Digite sua nota: ")
    media += notas[i];
}
media /= notas.length;
console.log(nome);
console.log(media);

//quest 2
let ano = require("readline-sync").questionInt("Digite um ano: ");
if (ano % 4 === 0 && ano % 100 !== 0) {
    console.log("Esse ano é bissexto");    
} else {
    console.log("Esse ano não é bissexto");
} */

//quest 3
/* let valor = require("readline-sync").questionInt("Digite o valor do produto: ");
let estado = require('readline-sync').question("Digite um desses estados(mg, sp, rj, ms): ");
switch (estado) {
    case 'mg':
        valor *= 1.07;
        console.log(valor.toFixed(2));
        break;

    case 'sp':
        valor *= 1.12;
        console.log(valor.toFixed(2));
        break;

    case 'rj':
        valor *= 1.15;
        console.log(valor.toFixed(2));
        break;

    case 'ms':
        valor *= 1.08;
        console.log(valor.toFixed(2));
        break;

    default:
        console.log("Estado inválido");
        break;
} */

//quest 4
/* let soma = 0;
for (let i = 1; i <= 50; i++) {
    num = i*2;
    soma += num;
}

let i = 0;
let soma2 = 0;
while (i<50) {
    i++;
    num = i*2;
    soma2 += num;
}

let v = 0;
let soma3 = 0;
do {
    v++;
    num = v*2;
    soma3 += num;
} while (v<50); 
o do while
*/
//quest 5
/* let n = require('readline-sync').questionInt("digite um número: ");
let i = 0;
let num = 0;
while (num<n) {
    i++;
    if (i%2!==0) {
        num++;
        console.log(i);
    }
} */

//quest 6
/* let numeroTrabalhados = require('readline-sync').questionInt("Digite a quantidade de dias trabalhados: ");
let salarioLiquido = (numeroTrabalhados*30)*0.92;
console.log(`Dias: ${numeroTrabalhados} = Salario: ${salarioLiquido} R$`);
 */
//quest 7
/* let ano = 2023, mes = 8, dia = 29, dia2 = 30;
let hora = require('readline-sync').questionInt("Digite a hora: ")
let minutos = require('readline-sync').questionInt("Digite os minutos: ")
let segundos = require('readline-sync').questionInt("Digite os segundos: ")
let horarioInicio = new Date(ano, mes, dia, hora, minutos, segundos);
let horaTermino = require('readline-sync').questionInt("Digite a hora do Termino: ")
let minutosTermino = require('readline-sync').questionInt("Digite os minutos do Termino: ")
let segundosTermino = require('readline-sync').questionInt("Digite os segundos do Termino: ")
let horarioTermino = new Date(ano, mes, dia2, horaTermino, minutosTermino, segundosTermino);
let diferença = (-1)*(horarioInicio-horarioTermino);
let dias = diferença/1000/60/60/24 */

let temperatura = require('readline-sync').questionFloat("Digite a temperatura: ");
let opcao = require('readline-sync').questionInt("1.de Celsius para Fahrenheit.\n2.de Celsius para Kelvin.\n3.de Fahrenheit para Celsius.\n4.de Fahrenheit para Kelvin.\n5.de Kelvin para Celsius.\n6.de Kelvin para Fahrenheit:\n");
switch (opcao) {

    case 1:
        temperatura = temperatura * 1.8 + 32
        break;
    case 2:
        temperatura += 273 
        break;

    case 3:
        temperatura = (temperatura-32)/1.8;
        break;

    case 4:
        temperatura = (temperatura-32)*5/9 + 273;
        break;

    case 5:
        temperatura -= 273;
        break;

    case 6:
        temperatura = (temperatura-273)*1.8 + 32;
        break;
    default:
        console.log("Número errado");
        break;
}