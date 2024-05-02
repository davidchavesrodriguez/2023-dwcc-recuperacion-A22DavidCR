let tree = document.getElementById("tree");

tree.style.width = "fit-content";
tree.addEventListener("click", (event) => {
  if (event.target.firstElementChild) {
    event.target.firstElementChild.classList.toggle("hidden");
  }
});
