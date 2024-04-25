let cups = document.getElementsByClassName("cups")[0];
let cupsArray = Array.from(document.getElementsByClassName("cup-small"));
let totalWater = document.getElementById("percentage");
let goal = document.getElementsByTagName("h3")[0];

// Add water cup
cups.addEventListener("click", (event) => {
  cupsArray.forEach((cup, index) => {});
});

// Check total water
let remainedContainer = document.getElementById("remained");
function checkTotalWater() {
  let fullCups = 0;
  let totalCups = 8;
  cupsArray.forEach((cup) => {
    if (cup.classList.contains("full")) {
      fullCups++;
    }
  });
  let drankWater = (fullCups / totalCups) * 100;
  totalWater.style.height = `${drankWater}%`;

  // Full water
  if (totalWater.style.height == "100%") {
    remainedContainer.style.display = "none";
    totalWater.style.backgroundColor = "#056ef7";
  }
}
