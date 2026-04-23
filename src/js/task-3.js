const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const updateGreetings = (value) => {
    const currentInput = value.trim();
    nameOutput.textContent = currentInput === "" ? "Anonymous" : currentInput;
}

updateGreetings(nameInput.value);
nameInput.addEventListener('input', (e) => {
    updateGreetings(e.target.value);
})
