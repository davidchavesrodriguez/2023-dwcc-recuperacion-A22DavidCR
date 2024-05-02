let contents = document.getElementById("contents");

contents.addEventListener("click", (event) => {
  if (
    event.target.closest("a") &&
    !confirm("Seguro que ques irte? Mira que se está moi ben na casiña")
  ) {
    event.preventDefault();
  }
});
