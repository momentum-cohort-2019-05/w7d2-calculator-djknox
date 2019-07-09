const display = document.querySelector('#calculator-display');

// add event listener to clear display when 'C' button is clicked
const clearButton = document.querySelector('#calculator-clear');
clearButton.addEventListener('click', function () {
    display.innerText = '';
});

// add event listener to evaluate the expression within calculator-display's innerText
// and replace calculator-display's innerText with the result
const equalsButton = document.querySelector('#calculator-equals');
equalsButton.addEventListener('click', function () {
    display.innerText = eval(display.innerText);
});

// add click listeners to every button with .calculator-button-item class
// when clicked, they will add their innerText to #calculator-display's innerText
const buttons = document.querySelectorAll('.calculator-button-item');
for (let button of buttons) {
    button.addEventListener('click', function () {
        display.innerText += button.innerText;
    });
}