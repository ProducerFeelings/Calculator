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


console.log(add (5,200));
console.log(subtract(10,5));
console.log(multiply(200,250));
console.log(divide(500,200));


//  Created three variables for each part of the calculator operation

var firstNum = a;

var secondNum = b;

const operators = {
    addition: '+',
    multiplication: '*',
    subtraction: '-'
};

// Function that takes two opearators and 2 numbers and then calls one f the above functions on the numbers 

function operate(a, b, operator) {
    if (operator === '+') {
        return addition(a, b);
    } else if (operator === '*') {
        return multiplication(a, b);
    } else if (operator === '-') {
        return subtraction(a, b);
    } else {
        console.log("Invalid operator");
        return null;
    }
}



// Variables to store calulator state

let firstNumber = '';
let operator = '';
let secondNumber = '';


// Variable to store display value 

let displayValue = '';

// Event listener for button clicks


document.getElementById('buttons').addEventListener('click', function(event) {
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