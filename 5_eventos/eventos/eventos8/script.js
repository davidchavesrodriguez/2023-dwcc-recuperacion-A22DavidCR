let thumbnails = document.getElementById("thumbs");
let largeImage = document.getElementById("largeImg");

thumbnails.addEventListener("click", (event) => {
  event.preventDefault();
  let smallImage = event.target.closest("img");
  let smallLink = smallImage.closest("a");

  largeImage.setAttribute("src", smallLink);
});
