/* Escribe as potencias de 2, dende 2⁰ ata 2²⁰. 
Para cada potencia debe saír un texto similar a “2 elevado a 0 = 1” */

let power = 0;

while (power !== 21) {
  console.log(`2 to the power of ${power} = ${2 ** power}`);
  power++;
}
