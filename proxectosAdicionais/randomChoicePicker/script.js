let textArea = document.getElementById("textarea");
let tagArea = document.getElementById("tags");
let tag;

// Evento que crea as opcións
textArea.addEventListener("input", () => {
  let textAreaValue = textArea.value;
  let numbers = textAreaValue.split(", ");
  console.log(numbers);
  tagArea.innerHTML= "";
  
  numbers.forEach((number) => {
    // Comprobar que se introduce un número
    if (!isNaN(number)) {
      tag = document.createElement("span");
      number.replaceAll(/\s/g, "x");
      tag.innerText = number.replaceAll(",", "");
      tag.classList.add("tag");
      tagArea.appendChild(tag);
    }
  });
});

textArea.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    console.log("Enter");
  }
});
