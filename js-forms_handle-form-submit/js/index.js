console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData);

  console.log("userData", userData);

  event.target.elements.firstName.focus();
  event.target.reset();
});
