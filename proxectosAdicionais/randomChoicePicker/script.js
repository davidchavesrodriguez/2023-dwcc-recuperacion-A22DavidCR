let textArea = document.getElementById("textarea");
let tagArea = document.getElementById("tags");
let tag;

// Evento que crea as opcións
textArea.addEventListener("input", () => {
  let textAreaValue = textArea.value;
  let numbers = textAreaValue.split(", ");
  console.log(numbers);

  numbers.forEach((number) => {
    console.log(isNaN(number / 1));

    if (!isNaN(number / 1 && number !== " ")) {
      tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerText = number.replaceAll(",", "");
    }
    tagArea.appendChild(tag);
  });
});

textArea.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    console.log("Enter");
  }
});
