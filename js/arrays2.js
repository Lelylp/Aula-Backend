//quest 1
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
let arrayJuntos = array1.concat(array2);
console.log("Concat de 2 arrays");
console.log(arrayJuntos);

//quest 2
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números páres");
console.log(numeros1.filter(x => x % 2 === 0));

//quest 3
const numeros2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Números ordenados");
console.log(numeros2.sort((a,b) => a-b));

//quest 4
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
console.log(`O index onde está laranja é ${frutas.indexOf('laranja')}`);
let num = 1
//quest 5

function ehArray (array) {
    if (typeof array == 'object') {
        return true
    }else{
        return false
    }
}
console.log(`variavel frutas é um array? ${ehArray(frutas)}`);