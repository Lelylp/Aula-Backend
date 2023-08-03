let jCarta1, jCarta2;
jCarta1 = 9;
jCarta2 = 10;
let somaJ = jCarta1+jCarta2;

let mCarta1, mCarta2, mCarta3, mCarta4;
mCarta1 = 5;
mCarta2 = 5;
mCarta3 = 6;
mCarta4 = 4;
let somaM = mCarta1+mCarta2+mCarta3+mCarta4;

if (somaM > 21 && somaJ > 21) {
    console.log("Empate");
} else if (somaJ > 21 && somaM <= 21){
    console.log("Máquina venceu");
} else if(somaM > 21 && somaJ <= 21){
    console.log("Jogador venceu");
}else if(somaM == somaJ){
    console.log("Empate")
}else if(somaJ > somaM){
    console.log("Jogador venceu")
}else{
    console.log("Máquina venceu")
}