/* Crea unha función á que se lle pase unha cadea de números e devolva
unha cadea da mesma lonxitude formada por * e as últimas 4 cifras do 
parámetro de entrada. */

function mask(number) {
  let shownNumber = number.slice(-4);
  let numberLength = number.length;
  console.log(`${shownNumber}`.padStart(numberLength, "*"));
}

mask("34123412347777”"); // ************7777
