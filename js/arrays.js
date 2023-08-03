const meuArray = [10, 20, 30, 40, 50];
let segundoElemento = meuArray[1];
console.log(segundoElemento);

const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
frutas.push('pera');
frutas.splice(0,4)
console.log(frutas);

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.log(`Existe número 25? ${numeros.includes(25)}`);