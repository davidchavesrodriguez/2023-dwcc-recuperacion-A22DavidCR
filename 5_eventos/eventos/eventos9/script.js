let list = document.getElementById("ul");
let elements = Array.from(document.getElementsByTagName("li"));

list.style.width = "fit-content";

list.addEventListener("click", (event) => {
  if (event.target.tagName == "LI") {
    elements.forEach((element) => {
      element.classList.remove("selected");
    });
    event.target.classList.add("selected");
  }
});
