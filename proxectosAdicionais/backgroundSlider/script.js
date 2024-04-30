let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let counter = 0;
let images = Array.from(document.querySelectorAll(".slide"));

window.onload = changeBackgound;

leftButton.addEventListener("click", () => {
  counter--;
  checkLimits();
  changeBackgound();
});

rightButton.addEventListener("click", () => {
  counter++;
  checkLimits();
  changeBackgound();
});

// Limit function
function checkLimits() {
  if (counter > 3) {
    counter = 0;
  }
  if (counter < 0) {
    counter = 3;
  }
}

// Change background
function changeBackgound() {
  images.forEach((photo) => {
    photo.classList.remove("active");
  });
  images[counter].classList.add("active");
  document.body.style.backgroundImage = images[counter].style.backgroundImage;
}
