let textArea = document.getElementById("textArea");
let addItemButton = document.getElementsByTagName("button")[0];
let removeAllButton = document.getElementsByTagName("button")[1];
let list = document.getElementById("lista");

// Add element
addItemButton.addEventListener("click", () => {
  let newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerText = textArea.value;

  list.appendChild(newItem);
});

// Remove all
removeAllButton.addEventListener("click", () => {
  list.innerHTML = "";
});
