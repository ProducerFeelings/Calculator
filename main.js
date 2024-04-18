// Calculator functions 

function addition (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}


// Function that takes two opearators and 2 numbers and then calls one f the above functions on the numbers 

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return NaN; // Invalid operato

    }

}
// Variables to store calulator state

let firstNumber = '';
let operator = '';
let secondNumber = '';

// Variable to store display value 

let displayValue = '';

// Event listener for button clicks
document.querySelectorAll('.number, .operator, .clear, .equals').forEach(button => {
    button.addEventListener('click', function(event) {
        const buttonClicked = event.target; // tracks button clicked
        if (buttonClicked.classList.contains('number')) {   // if element clicked has class number clicked
            const buttonText = buttonClicked.textContent.trim();// retrieves text content rm any whitespace trim for trimmed text
            displayValue += buttonText; // puts buttonText on display screen
            document.getElementById('display').value = displayValue;
        } else if (buttonClicked.classList.contains('operator')) { // Checks if clicked element has operator class
            firstNumber = parseFloat(displayValue); // makes first value a floating point number if an operator button 
            operator = buttonClicked.textContent.trim(); // retrieves text content of clicked operator and removes any whitespace
            displayValue = '';
        } else if (buttonClicked.classList.contains('clear')) { // clicked element contains class clear 
            displayValue = '';// makes display variable empty
            document.getElementById('display').value = ''; // makes value of html input empty 
        } else if (buttonClicked.classList.contains('equals')) { // if other conditions are false
            secondNumber = parseFloat(displayValue);// turns second number to a floating point number
            const result = operate(firstNumber, secondNumber, operator); // peforms calculation based on the operator and returns result  
            displayValue = result.toString(); // converts result to string and assigns to display value variable
            document.getElementById('display').value = displayValue; // changes the display value variable by getting the display value.
        }
    });
});
