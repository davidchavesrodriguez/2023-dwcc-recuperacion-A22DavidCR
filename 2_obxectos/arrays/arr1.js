/* Crea unha función que reciba un elemento e un array como 
parámetros. A función debe devolver un array cos índices onde 
aparece ese elemento no array. */

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {
  const foundIndex = [];
  let currentIndex = arrayElementos.indexOf(elemento);

  while (currentIndex !== -1) {
    foundIndex.push(currentIndex);
    currentIndex = arrayElementos.indexOf(elemento, currentIndex + 1);
  }
  let final = `(${elemento}) [${foundIndex}]`;
  return final;
}
console.log(indices(1, numeros)); // (1) [0, 3, 5, 9]
