/*let idade = 15;

if (idade <16) {
    console.log("Não pode dirigir");
} else if(idade <=17){
    console.log("Pode dirigir mas com alguma coisa");
}else{
    console.log("Pode dirigir de boa");
}*/
//readline.question("texto");
//para instalar o readline é 'npm install readline-sync'

const readline = require("readline-sync");
let diaDaSemana = Number(readline.question("diga o dia da semana\n"));
let mes = Number(readline.question("diga o dia do mês\n"));
let estadoCivil = readline.question("digite se é solteiro, casado ou divorciado ou outro\n").toLowerCase();
let animal = readline.question("digite seu se seu animal é um gato, cachorro, pássaro ou outro\n").toLowerCase();
let operador = readline.question("diga seu operador +, -, / ou *\n");
let num1 = Number(readline.question("digite um número\n"));
let num2 = Number(readline.question("digite outro número\n"));

switch (diaDaSemana) {
    case 1:
        console.log("\nDomingo");
        break;

    case 2:
        console.log("\nSegunda");
        break;

    case 3:
        console.log("\nTerça");
        break;

    case 4:
        console.log("\nQuarta");
        break;

    case 5:
        console.log("\nQuinta");
        break;

    case 6:
        console.log("\nSexta");
        break;

    case 7:
        console.log("\nSábado");
        break;

    default:
        console.log("\nvc digitou o número errado");
        break;
}

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;

    case 2:
        console.log("Fevereiro");
        break;

    case 3:
        console.log("Março");
        break;

    case 4:
        console.log("Abril");
        break;

    case 5:
        console.log("Maio");
        break;

    case 6:
        console.log("Junho");
        break;

    case 7:
        console.log("Julho");
        break;

    case 8:
        console.log("Agosto");
        break;
    
    case 9:
        console.log("Setembro");
        break;
    
    case 10:
        console.log("Outubro");
        break;
    
    case 11:
        console.log("Novembro");
        break;

    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("vc digitou o número errado");
        break;
}

switch (estadoCivil) {
    case "solteiro":
        console.log("Está solteiro");
        break;

    case "casado":
        console.log("Está casado");
        break;

    case "divorciado":
        console.log("Está divorciado");
        break;

    default:
        console.log("É outro");
        break;
}

switch (animal) {
    case "gato":
        console.log("Seu animal é um gato");
        break;

    case "cachorro":
        console.log("Seu animal é um cachorro");
        break;

    case "pássaro":
        console.log("Seu animal é um pássaro");
        break;

    default:
        console.log("Seu animal é outro");
        break;
}

switch (operador) {
    case '+':
        console.log("\nVocê escolheu adição");
        console.log("o resulato é: " + (num1+num2));
        break;

    case '*':
        console.log("\nVocê escolheu multiplicação");
        console.log("o resulato é: " + (num1*num2));
        break;

    case '/':
        console.log("\nVocê escolheu divisão");
        console.log("o resulato é: " + (num1/num2));
        break;

    case '-':
        console.log("\nVocê escolheu subtração");
        console.log("o resulato é: " + (num1-num2));
        break;
    
    default:
        console.log("\nSeu operador está errado");
        break;
}