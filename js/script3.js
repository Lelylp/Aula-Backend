let numero = 12;
let nome = "";
let boleano = true;

if(numero>0){
    console.log("É positvo");
}else if(numero<0){
    console.log("É negativo");
}else{
    console.log("Seu número é 0")
}

if(numero%2 == 0){
    console.log("É divisível por 2");
}else if(numero%3 == 0){
    console.log("É divisível por 3");
}else if(numero%5 == 0){
    console.log("É divisível por 5");
}else{
    console.log("Seu número não divisível por 2,3 e nem 5");
}

if(typeof(nome) == "boolean"){
    console.log("É boleano");
}else if(typeof(nome) == "number"){
    console.log("É número");
}else if(typeof(nome) == "string"){
    console.log("É string");
}else{
    console.log("Sua variavel é indefinida");
}

if(numero>0){
    if(numero%2 == 0){
        console.log("É positivo e par");
    }else{
        console.log("É positivo e ímpar");
    }
}else if(numero<0){
    if(numero%2 == 0){
        console.log("É negativo e par");
    }else{
        console.log("É negativo e ímpar");
    }
}else{
    console.log("Seu número é 0")
}

if(numero%2 == 0 || numero%3 == 0 || numero%5 == 0 || numero%7 == 0 ){
    console.log("ele é divisível por 2, 3, 5 e 7")
}else{
    console.log("ele não é divisível por 2, 3, 5 e 7");
}