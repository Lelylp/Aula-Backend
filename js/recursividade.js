function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function somaRecursiva(m) {
    if (m === 0 || m === 1) {
        return 1;
    } else {
        return m + somaRecursiva(m-1);
    }
}

let num = require('readline-sync').questionInt("Digite um valor para calcular a soma de todos os inteiros até 1: ")
console.log(`Número é ${num} e a soma de todos os números é ${somaRecursiva(num)}`);

let num2 = require('readline-sync').questionInt("Digite o número da sequencia de fibonacci que deseja saber: ")
console.log(`Número é ${num2} e a posição em fibonacci é ${fibonacci(num2)}`);