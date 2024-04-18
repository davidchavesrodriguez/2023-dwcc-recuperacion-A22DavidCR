// Crea unha función á que se lle pase unha frase con varias
// palabras e devolva a mesma frase coa primeira letra de cada
// palabra en maiúsculas e o resto de letras en minúsculas.

function mayusculator(string) {
  let lowerString = string.toLowerCase();
  let separatedString = lowerString.split(" ");
  for (let i = 0; i < separatedString.length; i++) {
    separatedString[i] =
      separatedString[i].charAt(0).toUpperCase() +
      separatedString[i].substring(1);
  }
  return separatedString.join(" ");
}

console.log(mayusculator("Hola buenos días"));
