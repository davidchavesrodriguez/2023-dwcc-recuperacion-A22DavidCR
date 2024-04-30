let button = document.getElementsByTagName("button")[0];
let textArea = document.getElementsByTagName("textarea")[0];
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", () => {
  let element = document.createElement("li");
  element.innerText = textArea.value;

  list.appendChild(element);
  textArea.value = "";
});
