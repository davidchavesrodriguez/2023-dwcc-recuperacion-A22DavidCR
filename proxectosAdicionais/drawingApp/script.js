let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let size = document.getElementById("size");
let sizeValue = parseInt(size.innerText);
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let color = document.getElementById("color");
let colorValue = color.value;

console.log(colorValue);

//Get Mouse Position
function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

// Draw
canvas.addEventListener("click", function (evt) {
  let mousePos = getMousePos(canvas, evt);

  let x = mousePos.x;
  let y = mousePos.y;

  ctx.beginPath();
  ctx.arc(x, y, sizeValue, 0, 2 * Math.PI);
  ctx.fillStyle = colorValue;
  ctx.fill();
  // ctx.stroke();
});

decrease.addEventListener("click", () => {
  sizeValue -= 5;
  size.innerText = sizeValue;
});

increase.addEventListener("click", () => {
  sizeValue += 5;
  size.innerText = sizeValue;
});
