// Indica, polo menos, unha forma de acceder aos seguintes nodos,
// utilizando os métodos de acceso a nodos:

// ● O elemento con id “input2”.
let secondInput = document.getElementById("input2");
console.log(secondInput);

// ● A colección de parágrafos
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// ● Todos os parágrafos dentro do div con id “lipsum”.
let lipsum = document.getElementById("lipsum");
let lipsumParagraph = lipsum.getElementsByTagName("p");
console.log(lipsumParagraph);

// ● O formulario
let form = document.getElementsByTagName("form")[0];
console.log(form);

// ● Todos os inputs
let inputs = document.getElementsByTagName("input");
console.log(inputs);

// ● Só os inputs con nome “sexo”.
let sexInputs = document.querySelectorAll('input[name="sexo"]');
console.log(sexInputs);

// ● Os items da lista con clase “important”.
let important = document.querySelectorAll("li.important");
console.log(important);
