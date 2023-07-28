const inputValue = document.getElementsByClassName("js-input")[0];
const createButton = document.querySelector('[data-action="create"]');
const deleteButton = document.querySelector('[data-action="destroy"]');
const targetElement = document.getElementById("boxes");
let lastDivSize = 0;

createButton.addEventListener('click', () => {
  createBoxes(inputValue.value);
});

deleteButton.addEventListener('click', () => {
  destroyBoxes();
});

function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const addStyles = (domElement, size) => {
  domElement.className = 'box';
  domElement.style.width = size;
  domElement.style.height = size;
  domElement.style.background = `#${getRandomColor()}`;
}

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 10 * (i + 3);
    const pxSize = `${size}px`;
    addStyles(div, pxSize)
    targetElement.appendChild(div);
  }
}

const destroyBoxes = () => targetElement.remove();