// Calculator functions 
function addition(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// Function that takes two operators and 2 numbers and then calls one of the above functions on the numbers 
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
            return NaN; // Invalid operator
    }
}

// Variables to store calculator state
let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';

// Event listener for button clicks
document.querySelectorAll('.number, .operator, .Ac, .equals').forEach(button => {
    button.addEventListener('click', function(event) {
        const buttonClicked = event.target;

        // Clear button clicked
        if (buttonClicked.classList.contains('Ac')) {
            firstNumber = '';
            operator = '';
            secondNumber = '';
            displayValue = '';
            document.getElementById('display').value = '';
            return;
        }

        // Equals button clicked
        if (buttonClicked.classList.contains('equals')) {
            if (firstNumber !== '' && operator !== '' && displayValue !== '') {
                secondNumber = parseFloat(displayValue);
                // Check for division by zero error
                if (operator === '/' && secondNumber === 0) {
                    displayValue = "Error: Cannot divide by zero!";
                } else {
                    const result = operate(firstNumber, secondNumber, operator);
                    displayValue += ' = ' + result.toString();
                    firstNumber = result; // Update firstNumber with the result for subsequent calculations
                }
                document.getElementById('display').value = displayValue;
                operator = '';
                secondNumber = '';
            }
            return;
        }

        // Number button clicked
        if (buttonClicked.classList.contains('number')) {
            const buttonText = buttonClicked.textContent.trim();
            displayValue += buttonText;
            document.getElementById('display').value = displayValue;
            return;
        }

        // Operator button clicked
        if (buttonClicked.classList.contains('operator')) {
            if (displayValue !== '') {
                firstNumber = parseFloat(displayValue);
                operator = buttonClicked.textContent.trim();
                displayValue += ' ' + operator + ' ';
            }
        }
    });
});
