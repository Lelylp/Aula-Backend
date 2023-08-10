/*function exibirSaudacao(nome, saudacao='Hello') {
    console.log(`${saudacao}, ${nome}`);
}*/
//exibirSaudacao('weslley');
//exibirSaudacao('weslley', 'Eai');

//quest 1
function saudacao(nome="Sr/Sra") {
    console.log(`Olá, ${nome}`);
}
//quest 2
function calculadora(num1, num2, opr = '+') {
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
function contagemRegressiva(cont=10) {
    while (cont>0) {
        console.log(`Contagem: ${cont}`);
        cont--;
    }
    console.log("Acabou o tempo");
}
//quest 4
function apresentacao(nome="uma pessoa", idade = "xx", profissao = "Trabalhador") {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
}
//quest 5

function mensagemPersonalizada(texto, formato = "normal") {
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

function somar(n1, n2) {
    return n1+n2;
}

function ehPar(num1) {
    if (num1%2 === 0) {
        return true;
    } else {
        return false;
    }
}

function maiorNumero(n1, n2, n3) {
    let lista = [n1, n2, n3];
    lista = lista.sort((a,b)=>a-b);
    return lista[2];
}

function calcularIMC(peso, altura) {
    return peso/(Math.pow(altura, 2));
}

function contarVogais(texto) {
    let letras = texto.splice("");
    let vogais = 0;
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'a' || letras[i] === 'e' || letras[i] === 'i' || letras[i] === 'o' || letras[i] === 'u' ) {
            vogais++;
        }
    }
    return vogais;
}

function celsiusParaFahrenheit(c) {
    return c*1.8+32;
}

function gerarSenha(tam) {
    let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9];
    let senha = Array(tam);
    for (let i = 0; i <= tam; i++) {
        let randomI = Math.floor(Math.random() * letras.length);
        senha[i] = (letras[randomI]);
    }
    return senha.join('');
}
console.log(gerarSenha(10));