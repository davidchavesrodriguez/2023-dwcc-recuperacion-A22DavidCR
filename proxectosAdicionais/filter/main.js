let userList = document.getElementById("result");
let filter = document.getElementById("filter");

let apiCall = fetch("https://randomuser.me/api/?results=50")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementsByTagName("li")[0].remove();
    Object.entries(data.results).forEach((element) => {
      let newUser = document.createElement("li");
      let newImage = document.createElement("img");
      newImage.setAttribute("src", element[1].picture.thumbnail);
      newImage.setAttribute("alt", element[1].name.last);
      let newUserDiv = document.createElement("div");
      newUserDiv.className = "user-info";
      let newUserName = document.createElement("h4");
      newUserName.innerText =
        element[1].name.first + " " + element[1].name.last;
      let newUserLocation = document.createElement("p");
      newUserLocation.innerText =
        element[1].location.city + ", " + element[1].location.country;

      newUserDiv.appendChild(newUserName);
      newUserDiv.appendChild(newUserLocation);
      newUser.appendChild(newImage);
      newUser.appendChild(newUserDiv);
      userList.appendChild(newUser);
    });
  });

filter.addEventListener("input", () => {
  let regexp = filter.value;

  let users = document.getElementsByTagName("li");
  Array.from(users).forEach((user) => {
    if (!user.innerText.includes(regexp)) {
      user.classList.add("hide");
    } else {
      user.classList.remove("hide");
    }
  });
});
