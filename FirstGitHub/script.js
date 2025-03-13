let counter = 0;
const max = 6;
const min = -6;
const counterDisplay = document.getElementById('counter');

function updateDisplay() {
    counterDisplay.textContent = counter;
}

function increment() {
    if (counter < max) {
        counter++;
        updateDisplay();
    }
}

function decrement() {
    if (counter > min) {
        counter--;
        updateDisplay();
    }
}

function resetCounter() {
    counter = 0;
    updateDisplay();
}
