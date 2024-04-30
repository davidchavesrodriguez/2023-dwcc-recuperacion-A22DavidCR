let link = document.getElementById("ligazon");
let span = document.getElementById("adicional");

link.addEventListener("click", () => {
  link.classList.add("oculto");
  span.classList.remove("oculto");
});
