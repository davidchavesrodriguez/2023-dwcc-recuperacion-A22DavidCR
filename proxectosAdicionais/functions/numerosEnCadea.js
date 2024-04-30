/* Crea unha función chamada numerosEnCadea que reciba 
un array de cadeas e devolva un array só coas cadeas que 
teñen números. Se non hai cadeas con números, debe devolver 
un array baleiro.*/

function numerosEnCadea(arrayCadeas) {
  let hasNumber = /\d/;
  arrayCadeas.forEach((cadea) => {
    if (hasNumber.test(cadea)) {
      console.log(cadea);
    }
  });
}

numerosEnCadea(["1a", "a", "2b", "b"]); // ["1a", "2b"]
numerosEnCadea(["abc", "abc10"]); // ["abc10"]
numerosEnCadea(["abc", "ab10c", "a10bc", "bcd"]); // ["ab10c", "a10bc"]
numerosEnCadea(["this is a test", "test1"]); // ["test1"]
