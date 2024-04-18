/* Garda nun array a lista de froitas: peras, mazás, kiwis, 
plátanos e mandarinas. Fai os seguintes apartados con splice: */
let fruits = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
console.log(fruits);

// a. Elimina as mazás.
fruits.splice(1, 1);
console.log(fruits);

// b. Engade detrás dos plátanos, laranxas e sandía.
fruits.splice(3, 0, "laranxas", "sandías");
console.log(fruits);

// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
fruits.splice(1, 1, "cereixas", "nésperas");
console.log(fruits);

// Despois de realizar cada operación, mostra por pantalla o array
// coa lista de froitas, onde os elementos estean separados por
// unha coma e espazo. Por exemplo, inicialmente o array debe
// mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.
