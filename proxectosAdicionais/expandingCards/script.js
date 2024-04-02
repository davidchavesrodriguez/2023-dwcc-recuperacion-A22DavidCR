let panelArray = document.querySelectorAll(".panel");

panelArray.forEach((element) => {
  element.addEventListener("click", () => {
    //Desactivar todos os paneis
    panelArray.forEach((panel) => {
      panel.classList.remove("active");
    });
    //Activar so o necesario
    element.classList.add("active");
    console.log(element);
  });
});
