/* Crea unha función denominada dividirArray que reciba como 
parámetros un array e un número que indica o tamaño dos 
anacos en que se dividirá o array. A función devolverá un 
novo array que conteña como elementos arrays do tamaño máximo 
indicado no segundo parámetro.*/

function trocearArray(array, int) {
  let arrayUnido = [];
  for (let index = 0; index < array.length; index += int) {
    let arrayRoto = array.slice(index, index + int);
    arrayUnido.push(arrayRoto);
  }
  console.log(arrayUnido);
}

trocearArray([1, 2, 3, 4], 2); // devolverá [[1, 2],[3, 4],]
trocearArray([1, 2, 3, 4, 5, 6, 7, 8], 3); // devolverá [[1, 2, 3], [4]]
