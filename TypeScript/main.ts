//1
function saudacao():void {
    console.log("Olá, mundo!");
}

//2
function dobro(num1:number):void {
    console.log(num1*2);
}

//3
function mostrarNumeros(num1:number,num2:number):void {
    for (num1; num1 < num2; num1++) {
        console.log(num1+1);
    }
}

//4
function verificarPar(num:number):void {
    if (num%2 == 0) {
        console.log("É par");
    } else {
        console.log("É ímpar");
    }
}

//5
//let numeros:number[] = [2,3,4,5];

function imprimirLista(numeros:number[]):void {
    numeros.forEach(i => {
        console.log(i);
    });
}

//6
let num:number;

function calcularMedia(numeros:number[]) {
    numeros.forEach(i => {
        num += i;
    });
    num /= numeros.length;
    console.log(num);
    
}
//7
function maiorNumero(numeros:number[]) {
    numeros.sort((a,b)=> a-b)
    console.log(numeros.lastIndexOf);
}

//8
function contarVogais(texto:string) {
    let letras:string[] = texto.split('');
    let vogais:number = 0;
    letras.forEach(i => {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            vogais++;
        }
    });
    console.log(vogais);
}
//9
function imprimirTabuada(num:number) {
    for (let i = 1; i <= 10; i++) {;
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

//10
function verificarPrimo(num1:number) {
    let cos:number = 1;
    let count:number = 0;
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

//quest 1
function outraSaudacao(nome="Sr/Sra"):void {
    console.log(`Olá, ${nome}`);
}
//quest 2
function calculadora(num1:number, num2:number, opr = '+'):void {
    switch (opr) {
        case '+':
            console.log(`A soma dos números é ${num1+num2}`);
        break;

        case '-':
            console.log(`A subtração dos números é ${num1-num2}`);
        break;
        
        case '/':
            console.log(`A divisão dos números é ${num1/num2}`);
        break;
        
        case '*':
            console.log(`A multiplicação dos números é ${num1*num2}`);
        break;
    
        default:
            console.log("Operador incorreto");
        break;
    }
}
//quest 3
function contagemRegressiva(cont=10):void {
    while (cont>0) {
        console.log(`Contagem: ${cont}`);
        cont--;
    }
    console.log("Acabou o tempo");
}
//quest 4
function apresentacao(nome="uma pessoa", idade = "xx", profissao = "Trabalhador"):void {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
}
//quest 5

function mensagemPersonalizada(texto:string, formato = "normal"):void {
switch (formato) {
    case 'normal':
        console.log(`${texto} está ${formato}`);
    break;

    case 'negrito':
        console.log(`${texto} está em ${formato}`);
    break;

    case 'italico':
        console.log(`${texto} está em ${formato}`);
    break;

    default:
        console.log("Erro");
    break;
    }
}

/*function criarMensagemDeSaudacao(nome, saudacao = "Hello") {
    return `${saudacao} ${nome}`;
}

let nome = criarMensagemDeSaudacao("Weslley", "Eai");
console.log(nome);*/

function somar(n1:number, n2:number) {
    return n1+n2;
}

function ehPar(num1:number) {
    if (num1%2 === 0) {
        return true;
    } else {
        return false;
    }
}

function outroMaiorNumero(n1:number, n2:number, n3:number) {
    let lista = [n1, n2, n3];
    lista = lista.sort((a,b)=>a-b);
    return lista[2];
}

function calcularIMC(peso:number, altura:number) {
    return peso/(Math.pow(altura, 2));
}

function outraContarVogais(texto:string) {
    let letras = texto.split("");
    let vogais = 0;
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'a' || letras[i] === 'e' || letras[i] === 'i' || letras[i] === 'o' || letras[i] === 'u' ) {
            vogais++;
        }
    }
    return vogais;
}

function celsiusParaFahrenheit(c:number) {
    return c*1.8+32;
}

function gerarSenha(tam:number) {
    let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
    let senha = Array(tam);
    for (let i = 0; i <= tam; i++) {
        let randomI = Math.floor(Math.random() * letras.length);
        senha[i] = (letras[randomI]);
    }
    return senha.join('');
}
console.log(gerarSenha(10));