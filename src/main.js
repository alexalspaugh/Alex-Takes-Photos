const toggle = document.querySelector(".toggle");
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const rootElement = document.querySelector("body");

if (prefersDarkMode.matches) {
	rootElement.classList.add("dark-theme");
} else {
  rootElement.classList.remove("dark-theme");
}

function modeSwitch() {
  
  rootElement.classList.toggle("dark-theme");
}

toggle.addEventListener("click", modeSwitch);