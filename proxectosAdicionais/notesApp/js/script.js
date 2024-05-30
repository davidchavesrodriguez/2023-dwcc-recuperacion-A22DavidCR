import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

let addButton = document.getElementById("add");
let body = document.getElementsByTagName("body")[0];

addButton.addEventListener("click", () => {
  let newNote = document.createElement("div");
  newNote.classList.add("note");
  let newTools = document.createElement("div");
  let newEditButton = document.createElement("button");
  newEditButton.classList.add("fas", "fa-edit");
  newTools.appendChild(newEditButton);
  let newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("fas", "fa-trash-alt");
  newTools.appendChild(newDeleteButton);
  newTools.classList.add("tools");
  newNote.appendChild(newTools);
  let newMain = document.createElement("div");
  newMain.classList.add("main", "hidden");
  newNote.appendChild(newMain);
  let newTextArea = document.createElement("textarea");
  newTextArea.setAttribute("rows", 6);
  newNote.appendChild(newTextArea);
  newEditButton.addEventListener("click", () => {
    newTextArea.classList.toggle("hidden");
    newMain.classList.toggle("hidden");
    newMain.innerHTML = marked.parse(newTextArea.value);
  });
  body.appendChild(newNote);
});
