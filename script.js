let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = '';
    }
    currentInput += char;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}
