/* Cálculo do IMC (índice de masa corporal)
IMC = peso (kg) / [estatura (m)]2
a. Almacena en variables o peso e altura de dúas persoas.
b. Calcula o IMC das dúas persoas.
c. Indica que persoa ten o maior IMC cunha cadea similar a: 
'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!' */

let squirrelHeight = 0.2;
let squirrelWeight = 0.54;

let duckHeight = 0.76;
let duckWeight = 4.1;

let squirrelIMC = parseFloat(
  (squirrelWeight / (squirrelHeight * 2)).toFixed(2)
);
let duckIMC = parseFloat((duckWeight / (duckHeight * 2)).toFixed(2));

if (squirrelIMC > duckIMC) {
  console.log(
    `Squirrel's IMC (${squirrelIMC}) is higher than duck's (${duckIMC})`
  );
} else {
  console.log(
    `Duck's IMC (${duckIMC}) is higher than squirrel's (${squirrelIMC})`
  );
}
