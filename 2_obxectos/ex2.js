/* Crea unha función á que se lle pase unha cadea e devolva
a cadea en sentido inverso. */

function reverseString(string) {
  let brokenString = string.split("");
  let reversedArray = brokenString.reverse();
  let finalText = reversedArray.join("");
  return finalText;
}

console.log(reverseString("I am a string")); // gnirts a ma I
