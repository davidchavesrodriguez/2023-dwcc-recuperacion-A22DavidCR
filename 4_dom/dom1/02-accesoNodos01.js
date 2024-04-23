// Indica, polo menos, unha forma de acceder aos seguintes nodos,
// utilizando os métodos de acceso a nodos:

// ● A táboa con id="age-table".
let table = document.getElementById("age-table");
console.log(table);

// ● Todos os elementos label dentro da táboa (debería haber 3).
let labels = table.getElementsByTagName("label");
console.log(labels);

// ● O primeiro td da táboa.
let firstTd = table.getElementsByTagName("td")[0];
console.log(firstTd);

// ● O formulario con name="search".
let form = document.forms["search"];
console.log(form);

// ● O primeiro input do formulario anterior.
let firstInput = document.getElementsByTagName("input")[0];
console.log(firstInput);

// ● O último input do formulario do apartado anterior.
let everyInput = document.getElementsByTagName("input");
let lastInput = everyInput[everyInput.length - 1];
console.log(lastInput);
