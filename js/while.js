//quest 1
let num = 1;
while (num<=10) {
    console.log(num);
    num++;
}

//quest 2
num = 1;
let soma = 0;
while (num<=100) {
    soma += num;
    num++;
}
console.log(soma);

//quest 3
num = 1;
let contPares = 0;
while (num <= 50) {
    if (num%2 == 0) {
        contPares += 1;
    }
    num++;
}
console.log(contPares);

//quest 4
num = 1;
while (num<1000) {
    num *= 2;
}
console.log(num);

//quest 5
num = require('readline-sync').questionInt("Digite um número: ");
let cos = 1;
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
while (senha !== pass){
    var pass = require('readline-sync').questionInt("Digite sua senha: ");
    if (senha !== pass) {
        console.log("Senha incorreta, tente novamente");
    }
}
console.log("Senha correta");

//quest 7
num = 1;
while (num <= 30) {
    if (num %3 === 0) {
        console.log(num);
    }
    num++;
}

//quest 8
let numeros = [1, 2, 3, 4, 5, 6];
let media = 0, i = 0;
while (i < numeros.length) {
    media += numeros[i];
    i++
}
media /= numeros.length
console.log(media);

//quest 9
num = require('readline-sync').questionInt("Digite um número para saber sua fatorial: ")
let fatorial = 1;
while (num !=0) {
    fatorial *= num;
    num--;
}
console.log(fatorial);

//quest 10
num = 10;
while (num >0) {
    console.log(num);
    num--;
}