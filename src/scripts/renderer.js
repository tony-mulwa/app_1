// helper
function getElement(name) {
  let element = document.getElementById(name);

  if (!element) throw new Error(`Element with ${name} not found!`);

  return element;
}

const btn = getElement("btn");
const title = getElement("title");
const number = getElement("number");

number.innerText = 0;

// eventListeners
btn.addEventListener("click", () => {
  number.innerText = parseInt(number.innerText) + 1;
});
