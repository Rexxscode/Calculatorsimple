let display = document.getElementById('display');

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Append a character to the display
function appendCharacter(char) {
    display.value += char;
}

// Calculate the result of the expression
function calculateResult() {
    try {
        display.value = eval(display.value);
        display.classList.add('blink');  // Add the blink effect
        setTimeout(() => {
            display.classList.remove('blink'); // Remove the blink effect after animation
        }, 200);
    } catch {
        display.value = 'Error';
    }
}

// Theme switching logic
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Fade-in animation on page load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.calculator').classList.add('fade-in');
});
