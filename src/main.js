const toggle = document.querySelector(".toggle");
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const rootElement = document.querySelector("body");
const svg = document.querySelector("svg")
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

if (prefersDarkMode.matches) {
	rootElement.classList.add("dark-theme");
  moon.style.display="block"
  sun.style.display="none"
} else {
  rootElement.classList.remove("dark-theme");
  moon.style.display="none"
  sun.style.display="block"
}

function hideShow () {
  if (moon.style.display === "block") {
    moon.style.display="none"
    sun.style.display="block"
  } else {
    moon.style.display="block"
    sun.style.display="none"
  }
}

function modeSwitch() {
  hideShow()
  rootElement.classList.toggle("dark-theme");
}

toggle.addEventListener("click", modeSwitch);