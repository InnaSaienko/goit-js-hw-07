function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const button = document.querySelector(".change-color");
const colorText = document.querySelector(".color")

button.addEventListener("click", (e) => {
  const newColor = getRandomHexColor();
  body.style.background = newColor;
  colorText.textContent = newColor;
})