// Crea unha función denominad reverseString que reciba unha cadea
// como parámetro e devolva a cadea cos caracteres invertidos.
// Así, se recibe "hello", debe devolver "olleh". A funcionalidade
// debe estar implementada manualmente.

function reverseString(string) {
  let brokenString = string.split("");
  let reversedArray = brokenString.reverse();
  let finalText = reversedArray.join("");
  console.log(finalText);
}

reverseString("Isamel e Dalton son mellores amigos");
