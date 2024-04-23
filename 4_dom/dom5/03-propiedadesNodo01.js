// Indica, polo menos, unha forma de acceder ao seguinte
// contido e mostralo por consola:

// ● O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:
let escolleSexo = document.getElementsByTagName("label")[3];
console.log(escolleSexo.innerHTML);
console.log(escolleSexo.innerText);
console.log(escolleSexo.textContent);

// ● O valor do primeiro input de sexo
let firstSexInput = document.querySelector("input[name='sexo']");
console.log(firstSexInput.value);

// ● O valor do sexo que estea seleccionado.
let sexInputs = document.querySelectorAll("input[name='sexo']");

// ● O texto de cada un dos elementos <li>

// ● Indica cantos elementos <li> hai.

// ● Indica o valor do atributo data-widget-name
