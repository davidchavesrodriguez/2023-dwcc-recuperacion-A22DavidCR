let progressBar = document.getElementById("progress");
let circleElements = document.querySelectorAll(".circle");
let numberOfCircles = circleElements.length - 1;
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let counter = 0;
let progressBarWidth = 0;
let progressBarChange = 100 / numberOfCircles;

nextButton.addEventListener("click", () => {
  counter++;
  progressBarWidth += progressBarChange;
  progressBar.style.width = `${progressBarWidth}%`;
  circleElements[counter].classList.add("active");
  if (counter === numberOfCircles) {
    nextButton.setAttribute("disabled", "");
  }
  if (counter !== 0) {
    prevButton.removeAttribute("disabled");
  }
});

prevButton.addEventListener("click", () => {
  circleElements[counter].classList.remove("active");
  counter--;
  progressBarWidth -= progressBarChange;
  progressBar.style.width = `${progressBarWidth}%`;
  if (counter === 0) {
    prevButton.setAttribute("disabled", "");
  }
  if (counter !== numberOfCircles) {
    nextButton.removeAttribute("disabled");
  }
});
