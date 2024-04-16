/* Números aleatorios:
a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos). */

console.log("a) ");

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log(getRandomIntInclusive(0, 3));

// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).

console.log("b) ");

function getRandomIntInclusive2(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log(getRandomIntInclusive2(1, 3));

// c. Crea unha función que devolva un número aleatorio entre os dous valores
// pasados como parámetros. Así, por exemplo, a seguinte instrución debe
// mostrar un número aleatorio entre 5 e 10 (incluídos):
// console.log(numeroAleatorio(5, 10)); */

console.log("c) ");

function getRandomIntInclusive3(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log(getRandomIntInclusive(5, 10));
