const VALID_INPUT = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*'];
const display = document.querySelector('#calculator-display');

// add click listeners to every button with
// .calculator-button-item and .calculator-button-operator classes
// when clicked, they will add their innerText to #calculator-display's innerText
const buttons = document.querySelectorAll(['.calculator-button-number', '.calculator-button-operator']);
for (let button of buttons) {
    button.addEventListener('click', function () {
        if (VALID_INPUT.includes(button.innerText)) {
            display.innerText += button.innerText;
        }
        else {
            window.alert("That wasn't valid input!");
        }
    });
}

// add event listener to evaluate the expression within calculator-display's innerText
// and replace calculator-display's innerText with the result
const equalsButton = document.querySelector('#calculator-equals');
equalsButton.addEventListener('click', function () {
    try {
        display.innerText = math.evaluate(display.innerText);
    }
    catch (error) {
        window.alert("That wasn't a valid expression!");
        display.innerText = '';
    }
});

// add event listener to clear display when 'C' button is clicked
const clearButton = document.querySelector('#calculator-clear');
clearButton.addEventListener('click', function () {
    display.innerText = '';
});

// add event listener for keyboard events
/*
const body = document.querySelector('body');
body.addEventListener('keydown', function (event) {
    if (VALID_INPUT.includes(event.key)) {
        display.innerText += event.key;
    }
    else {
        window.alert("That wasn't valid input!");
    }
});
*/