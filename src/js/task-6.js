function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        elements.push(div);
        size += 10;
    }
    boxes.append(...elements);
}

function cleanBoxes() {
    boxes.innerHTML = '';
}

createButton.addEventListener("click", () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        alert('Range squares is from 1 to 100');
        return;
    }
    cleanBoxes();
    createBoxes(amount);
    input.value = "";
});
destroyButton.addEventListener("click", cleanBoxes);

