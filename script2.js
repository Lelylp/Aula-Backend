let numero = 12;
let nome = "";
let boleano = true;

if(numero>0){
    console.log("é positvo");
}else{
    console.log("Deu erro");
}

if(numero%2 == 0){
    console.log("é par");
}else{
    console.log("é ímpar");
}

if(nome == ""){
    console.log("é vazio");
}else{
    console.log(nome);
}

if(numero > 10){
    console.log("é maior que 10");
}else{
    numero*=2;
}

if(typeof(boleano)=="boolean"){
    console.log("é boleano");
}else{
    boleano = false;
}