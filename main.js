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
    return a/b;
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




