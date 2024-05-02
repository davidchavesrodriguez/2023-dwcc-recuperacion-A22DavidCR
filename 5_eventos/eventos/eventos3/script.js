let text = document.getElementById("click");
let list = document.getElementsByClassName("hidden")[0];

text.style.width = "fit-content";

text.addEventListener("click", () => {
  list.classList.remove("hidden");
});
