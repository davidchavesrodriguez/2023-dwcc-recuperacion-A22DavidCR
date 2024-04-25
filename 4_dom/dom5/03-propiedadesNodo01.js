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
sexInputs.forEach((element) => {
  if (element.hasAttribute("checked")) {
    console.log(element.value);
  }
});

// ● O texto de cada un dos elementos <li>
let liElements = document.querySelectorAll("li");
liElements.forEach((element) => {
  console.log(element.innerText);
});

// ● Indica cantos elementos <li> hai.
console.log(liElements.length);

// ● Indica o valor do atributo data-widget-name
let dataDiv = document.querySelectorAll("div")[1];
console.log(dataDiv.dataset.widgetName);
