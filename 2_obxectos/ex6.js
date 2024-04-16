/* Crea unha variable chamada x e asínalle un número enteiro aleatorio
entre 1 e 100. Crea tamén outra variable chamada y con un número 
enteiro aleatorio entre 1 e 50. Fai as operacións suma, resta, 
multiplicación, división e resto das dúas variables mostrando o 
resultado por pantalla. O resultado debe mostrar os operandos, a 
operación e o resultado. */

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const x = getRandomIntInclusive(1, 100);
const y = getRandomIntInclusive(1, 50);

const sum = x + y;
const sub = x - y;
const mul = x * y;
const div = x / y;
const res = x % y;

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${sub}`);
console.log(`${x} * ${y} = ${mul}`);
console.log(`${x} / ${y} = ${div}`);
console.log(`${x} % ${y} = ${res}`);
