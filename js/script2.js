let numero = -7;
let nome = "Weslley";
let boleano = 5;

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
    console.log(numero);
}

if(typeof(boleano)=="boolean"){
    console.log("é boleano");
}else{
    boleano = false;
    console.log(boleano);
}