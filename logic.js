console.log("Logic is ready!");

// Variable to store the concatenated value
let firstNumber = "";
let secondNumber = "";
let results = 0;
let operator = "null"

// Select all buttons with a shared class (e.g., btnValue)
const buttons = document.querySelectorAll('.btnValue');
const operators = document.querySelectorAll('.btnOperator');

operators.forEach((selected) => {
    selected.addEventListener('click', () => {
        // Update the operator when an operator button is clicked
        operator = selected.value;
    });
});

// Add event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === "null") {
            // Concatenate the button's value to the variable
            console.log("Operator is now " +operator);
            firstNumber += button.value;
            console.log("This is the concatenated value: " + firstNumber);
        }

        else {
            button.addEventListener('click', () => {
                // Concatenate the button's value to the variable
                console.log("Operator is now " +operator);
                secondNumber += button.value;
                console.log("This is the second value: " + secondNumber);
            });
        }
    });
});

// Select all buttons with a shared class (e.g., btnValue)
let clearEntry = document.querySelector('.button-value-EC');

// Add event listener to each button
clearEntry.addEventListener('click', () => {
        // Concatenate the button's value to the variable

        firstNumber = firstNumber.slice(0,-1);
        console.log("This is the new concatenated value: " + firstNumber);
});
