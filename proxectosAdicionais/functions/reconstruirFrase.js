/* Crea unha función denominada reconstruirFrase que reciba como 
parámetros dúas cadeas. A primeira cadea representa unha frase 
onde se substituíron as vocais polo símbolo “*”. 
A segunda cadea contén as vocais que faltan na primeira cadea, 
por orde de aparición. A función debe devolver a frase reconstruída, 
substituíndo os símbolos “*” pola vocal correspondente:
*/

reconstruirFrase("Wh*r* d*d my v*w*ls g*?", "eeioeo"); // "Where did my vowels go?"
reconstruirFrase("abcd", ""); // "abcd"
reconstruirFrase("*PP*RC*S*", "UEAE"); // "UPPERCASE"

function reconstruirFrase(frase, letras) {
  let arrayFrase = frase.split("");
  let contador = 0;

  for (let i = 0; i < arrayFrase.length; i++) {
    if (arrayFrase[i] == "*") {
      arrayFrase[i] = letras[contador];
      contador++;
    }
  }
  console.log(arrayFrase.join(""));
}
