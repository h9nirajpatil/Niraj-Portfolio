function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let lightbulb = document.getElementById("light-bulb");
let current_mode = "light";
let body = document.querySelector("body");
lightbulb.addEventListener("click", function () {
  if (current_mode === "light") {
    current_mode = "dark";
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    current_mode = "light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
