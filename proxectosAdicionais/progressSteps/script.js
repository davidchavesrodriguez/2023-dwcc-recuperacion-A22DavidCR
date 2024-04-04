let progressBar = document.getElementById("progress");
let circleElements = document.querySelectorAll(".circle");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let counter = 0;
let progressBarWitdht = 0;

nextButton.addEventListener("click", () => {
  counter++;
  progressBarWitdht += 33;
  progressBar.style.width = `${progressBarWitdht}%`;
  circleElements[counter].classList.add("active");
  if (counter === 3) {
    nextButton.setAttribute("disabled", "");
  }
  if (counter !== 0) {
    prevButton.removeAttribute("disabled");
  }
});

prevButton.addEventListener("click", () => {
  circleElements[counter].classList.remove("active");
  counter--;
  progressBarWitdht -= 33;
  progressBar.style.width = `${progressBarWitdht}%`;
  if (counter === 0) {
    prevButton.setAttribute("disabled", "");
  }
  if (counter !== 3) {
    nextButton.removeAttribute("disabled");
  }
});
