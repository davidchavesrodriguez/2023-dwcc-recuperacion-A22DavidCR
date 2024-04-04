/* Crea 3 variables e inicialízaas con 3 números diferentes. 
Mostra por pantalla o maior dos 3 números. */

let num1 = 1;
let num2 = 2;
let num3 = 1;

if (num1 > num2 && num1 > num3) {
  console.log("Gaña o primeiro");
} else if (num2 > num1 && num2 > num3) {
  console.log("O maior é o segundo");
} else {
  console.log("O maoir é o terceiro");
}
