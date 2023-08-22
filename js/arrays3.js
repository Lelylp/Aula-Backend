/* const usuarios = [
    {nome:"Robinson", idade:18},
    {nome:"William", idade:28},
    {nome:"Janaina", idade:19},
    {nome:"Carla", idade:25},
    {nome:"Maíra", idade:32},
    {nome:"George", idade:30},
    {nome:"Camila", idade:27},
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome);
    console.log(usuarios[i].idade);
}

for (let i in usuarios) {
    console.log(usuarios[i].nome);
    console.log(usuarios[i].idade);
}

for (let i of usuarios) {
    console.log(i.nome);
    console.log(i.idade);
} */

/* //quest 1
const numeros = [3, 7, 2, 9, 5];

///for..in
for (let a in numeros) {
    console.log(numeros[a]);
}

///for..of
for (let b of numeros) {
    console.log(b);
} */

//quest 2

/* let valNumericos = {a:10, b:20, c:30, d:40};
let somaDeTudo = 0;

///for..in
for (let i in valNumericos) {
    somaDeTudo += valNumericos[i]
}
console.log(somaDeTudo);  */

//quest 3
/* let numerosArr = [12, 5, 8, 21, 16, 7];
let novosNumeros = []; */

///for..in
/* for (let i in numerosArr) {
    if (numerosArr[i]%2 === 0) {
        novosNumeros.push(numerosArr[i]);
    }
} */

///for..of
/* for (let i of numerosArr) {
    if (i%2 === 0) {
        novosNumeros.push(i);
    }
} */

//quest 4
/* const estudantes = {alice: 18, bob: 20, carol: 19, david: 21};

///for..in
for (let i in estudantes) {
    if (estudantes[i]>19) {
        console.log(`${i}: ${estudantes[i]}`);
    }
} */

//quest 5
/* const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];
let somadeTodos = 0; */

///for..in
/* for (let i in pontos) {
    let aux = pontos[i]
    for (const j in aux) {
        somadeTodos += aux[j];
    }
}  */

///for..of
/* for (let a of pontos) {
    let aux2 = a;
    for (let b of aux2) {
        somadeTodos +=b;
    }
}
console.log(somadeTodos); */