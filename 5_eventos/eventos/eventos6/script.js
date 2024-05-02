let table = document.getElementById("grid");

table.addEventListener("click", (event) => {
  if (event.target.tagName == "TH") {
    console.log(event.target);
  }
});
