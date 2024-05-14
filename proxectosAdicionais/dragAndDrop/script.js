let dragged = null;

const source = document.getElementsByClassName("fill")[0];
source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementsByClassName("empty");
Array.from(target).forEach((element) => {
  element.addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "empty") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
