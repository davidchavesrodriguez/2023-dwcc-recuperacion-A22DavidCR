/* Crea unha función que reciba un elemento e un array como 
parámetros. A función debe devolver un array cos índices onde 
aparece ese elemento no array. */

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
function indices(elemento, arrayElementos) {
  const selectedNumber = [];
  let contador = 0;
  arrayElementos.forEach((number) => {
    if (number == elemento) {
      contador++;
      selectedNumber.push(number);
    }

    const final = `(${contador}) ${selectedNumber}`;
    return final;
  });
}
console.log(indices(1, numeros)); // (4) [0, 3, 5, 9]
