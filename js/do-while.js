//quest 1
let num = 1;
do {
    console.log(num);
    num++; 
} while (num <= 10);

//quest 2
num = 1;
let soma = 0;
do {
    soma += num;
    num++;
} while (num <= 100);
console.log(soma);

//quest 3
num = 1;
let contPares = 0;
do {
    if (num%2 == 0) {
        contPares += 1;
    }
    num++;
} while (num != 50);
console.log(contPares);

//quest 4
num = 1;
do {
    num *= 2;
} while (num <= 1000);
console.log(num);

//quest 5
num = require('readline-sync').questionInt("Digite um número: ");
let cos = 0;
let count = 0;
do {
    if(num%cos == 0){
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

//quest 6
let senha = 1234;
do {
    var pass = require('readline-sync').questionInt("Digite sua senha: ");
    if (senha !== pass) {
        console.log("Senha incorreta, tente novamente");
    }
} while (senha !== pass);
console.log("Senha correta");

//quest 7
num = 3;
do {
    if (num %3 === 0) {
        console.log(num);
    }
    num += 3;
} while (num <= 30);

//quest 8
let numeros = [1, 2, 3, 4, 5, 6];
let media = 0, i = 0;
do {
    media += numeros[i];
    i++
} while (i < numeros.length);
media /= numeros.length
console.log(media);

//quest 9
num = require('readline-sync').questionInt("Digite um número para saber sua fatorial: ")
let fatorial = 1;
do {
    fatorial *= num;
    num--;
} while (num !=0);
console.log(fatorial);

//quest 10
num = 10;
do {
    console.log(num);
    num--;
} while (num >0);