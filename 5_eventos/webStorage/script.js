let nome = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  localStorage.setItem("name", nome.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("message", mensaje.value);

  let storageEmail = localStorage.getItem("email");
  console.log(storageEmail);
});
