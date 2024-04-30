/* Crea unha función denominada isPalidrome que reciba 
como parámetro un string e devolva true se é un palíndromo 
e false en caso contrario. */

function isPalindrome(string) {
  let reversedArray = string.split("").reverse();
  let reversedString = reversedArray.join("").toLowerCase().replaceAll(" ", "");
  console.log(reversedString);

  let booleanResult =
    string.toLowerCase().replaceAll(" ", "") === reversedString ? true : false;
  console.log(booleanResult);
}

isPalindrome("Bos días");
isPalindrome("Etna da luz azul a Dante");
