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
if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
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
let diff = Math.abs(horarioInicio.getTime() - horarioTermino.getTime());
let diffSeg = Math.ceil(diff/1000%60);
let diffMin = Math.floor(diff/1000/60%60);
let diffHora = Math.floor(diff/1000/60/60%24);
console.log(`${diffHora}:${diffMin}:${diffSeg}`); */


//quest 8
/* let horaNormal = require('readline-sync').questionInt("Digite a quantidade de horas trabalhadas por dia: ");
let horaExtra = require('readline-sync').questionInt("Digite a quantidade de horas extras trabalhadas: ");
let salario = (horaNormal*10.00*24*12) + (horaExtra * 15); */

//quest 9
/* let numeros = Array(3);
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = require('readline-sync').questionInt("Digite um número: ")
}
numeros.sort((a,b)=>a-b);
console.log(numeros); */

//quest 10
/* let temperatura = require('readline-sync').questionFloat("Digite a temperatura: ");
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
} */

//quest 11
/* function mesAno(mes,ano) {
        switch (mes) {
            case 1:
                return 31;
            case 2:
                if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 ===0) {
                    return 29;
                }
                return 28;
            case 3:
                return 31;
            case 4:
                return 30;
            case 5:
                return 31;
            case 6:
                return 30;
            case 7:
                return 31;
            case 8:
                return 31;
            case 9:
                return 30;
            case 10:
                return 31;
            case 11:
                return 30;
            case 12:
                return 31;
            default:
                console.log("Mês incorreto");
                break;
        }
}
let numero = mesAno(2,2000);
console.log(numero); */

//quest 12
/* function saberHora(começo,fim) {
    let start = começo.split(':');
    //console.log(start);
    let end = fim.split(':');
    //console.log(end);
    if (start[0]>23|| end[0] >23 ||start[1]>59|| end[1] >59) {
        return "Datas incorretas";
    }
    start = start[0]*60 + Number(start[1]);
    end = end[0]*60 + Number(end[1]);
   // console.log(end);
    if (start<end) {
        return start-end;
    }else{
        end += 1440;
        return  end - start
    }
}
let hora1 = saberHora("23:00", "04:10")
let hora2 = saberHora("20:00", "23:69")
console.log(hora1);
console.log(hora2); */

//quest 13

/* function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
} */