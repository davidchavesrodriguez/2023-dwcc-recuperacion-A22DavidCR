// Crea unha función chamada sumaCifras que reciba un número
// como parámetro e devolva a suma das súas cifras.

function sumaParImpar(numero) {
  let array = numero.toString().split("");
  let valorInicial = 0;
  let sumaTotal = array.reduce(
    (acc, cur) => parseInt(acc) + parseInt(cur),
    valorInicial
  );
  console.log(sumaTotal);
}

sumaParImpar(43); // 7
sumaParImpar(373); // 13
sumaParImpar(4433); // 14
