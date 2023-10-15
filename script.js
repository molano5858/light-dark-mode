// selecting checkbox
const toggleSwitch = document.querySelector('input[type="checkbox"]');
// selecting all needed elements
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark mode styles

function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0/50%)";
  textBox.style.color = "white";
  // changing nav elements
  toggleIcon.children[0].textContent = "Dark mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  // changing illustrations
  image1.src = "./img/undraw_proud_coder_dark.svg";
  image2.src = "./img/undraw_feeling_proud_dark.svg";
  image3.src = "./img/undraw_conceptual_idea_dark.svg";
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 10%)";

  textBox.style.backgroundColor = "rgb(255 255 255 / 10%)";
  textBox.style.color = " var(--on-primary)";
  // changing nav elements
  toggleIcon.children[0].textContent = "Light mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  // changing illustrations
  image1.src = "./img/undraw_proud_coder_light.svg";
  image2.src = "./img/undraw_feeling_proud_light.svg";
  image3.src = "./img/undraw_conceptual_idea_light.svg";
}

// Change theme
function switchTheme(event) {
  console.log("se ejecuto");
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Switch´s listener
toggleSwitch.addEventListener("change", switchTheme);

// check current localStorage theme
const currentTheme = localStorage.getItem("theme");
// get data from localStorage to set the theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  } else if (currentTheme === "ligth") {
    lightMode();
  }
}
