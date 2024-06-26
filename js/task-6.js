const createButton = document.querySelector(`#controls button[data-create]`);
const destroyButton = document.querySelector(`#controls button[data-destroy]`);
const containerEl = document.querySelector(`#boxes`);
const inputEl = document.querySelector(`#controls input`);
createButton.addEventListener("click", function () {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Будь ласка, введіть число від 1 до 100.");
  }
});

destroyButton.addEventListener("click", function () {
  destroyBoxes();
});

function createBoxes(amount) {
  containerEl.textContent = "";
  const fragment = document.createDocumentFragment();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`);
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "10px";
    fragment.appendChild(box);
    size += 10;
  }
  containerEl.appendChild(fragment);
}
function destroyBoxes() {
  containerEl.textContent = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
