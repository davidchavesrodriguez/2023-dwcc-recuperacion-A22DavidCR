/* Inicializa unha variable a un número, calcula o seu factorial 
e mostra a resultado por consola.  */

let number = 4;
let counter = number;
let factorial = 1;

while (counter > 0) {
  factorial *= counter;
  counter--;
}

console.log(`The factorial of ${number} is ${factorial}`);
