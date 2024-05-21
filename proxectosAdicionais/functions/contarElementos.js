/* Crea unha función chamada contarElementos que reciba 
como parámetro un array e devolva un número de elementos 
que contén. O array recibido como parámetro pode 
ter outros arrays aniñados. A función debe devolver 
o número de elementos primitivos que contén o array, 
independente do seu nivel de aniñamento:
*/

// contarElementos([1, [2, 3]]); // 3
// contarElementos([1, [2, [3, 4]]]); // 4
contarElementos([1, [2, [3, [4, [5, 6]]]]]); // 6
// contarElementos([1, [2], 1, [2], 1]); // 5
// contarElementos([]); // 0

function contarElementos(array) {
  let contador = 0;

  array.forEach((element) => {
    if (Array.isArray(element)) {
      contador += contarElementos(element);
    } else {
      contador++;
    }
  });
  return contador;
}
