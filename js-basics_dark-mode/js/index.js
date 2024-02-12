console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');
buttonDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  bodyElement.classList.remove("light");
});
const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');
buttonLightMode.addEventListener("click", () => {
  bodyElement.classList.add("light");
  bodyElement.classList.remove("dark");
});
const buttonToggle = document.querySelector('[data-js="toggle-button"]');
buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
