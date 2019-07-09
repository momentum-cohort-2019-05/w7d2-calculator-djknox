const VALID_INPUT = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*'];
const display = document.querySelector('#calculator-display');

// add click listeners to every button with
// .calculator-button-item and .calculator-button-operator classes
const buttons = document.querySelectorAll(['.calculator-button-number', '.calculator-button-operator']);
for (let button of buttons) {
    // when clicked, they will add their innerText to #calculator-display's innerText
    button.addEventListener('click', function () {
        if (VALID_INPUT.includes(button.innerText)) {
            display.innerText += button.innerText;
        }
        else {
            window.alert("That wasn't valid input!");
        }
    });
    // change color when mouse hovers
    button.addEventListener('mouseenter', function () {
        button.style.color = "#32DE8A";
    });
    button.addEventListener('mouseleave', function () {
        button.style.color = '';
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