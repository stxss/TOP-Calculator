// Selecting the number buttons 
let buttons = document.querySelectorAll(".buttons .num");

// Selecting the display screen
let display = document.querySelector(".screen");

// Selecting the operator, equals, delete, clear and dot/comma separator buttons
let divBtn = document.querySelector(".divide");
let mltBtn = document.querySelector(".multiply");
let subBtn = document.querySelector(".subtract");
let sumBth = document.querySelector(".sum");
let eqlBtn = document.querySelector(".equals");
let dotBtn = document.querySelector(".dot");
let clrBtn = document.querySelector(".clear");

// Setting the flags of each operator button
let divBtnFlag = false; 
let mltBtnFlag = false;
let subBtnFlag = false;
let sumBtnFlag = false;
let eqlBtnFlag = false;
let dotBtnFlag = false;

// How many times the operation button was pressed, this flag is used to prevent multiple button presses triggering the operation actions
let manyPressed = 0; 

// Setting the display value to empty, at first
let displayValue;

// Creating the second value, empty at first
let secValue;

// Creating a flag for if the operator is active aka if there is an operator selected, initially set to false
let isOperator = false;

// Creating the variable to store the operator, once it is selected
let slOperator = "";

//  Passing the number values to numbers
let n1;
let n2;
let result;

// Flag for a new operation after the first. This acts as a stopper if there isn't any number set for an operation yet
let newOperation = false; 

// Adding a listener for each of the number buttons, that will update the display when clicked.
buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {

        // If the operator isn't chosen/active/clicked yet, then update the first number until an operator is chosen
        if (!isOperator) {
            if (!displayValue) {
                displayValue = buttons.id;
            } else if (displayValue && display.classList.contains("result")) {
                display.classList.remove("result");
                displayValue = buttons.id;
            } else if (displayValue && !display.classList.contains("result")) {
                displayValue += buttons.id;
            }

            // Reflect the number insertion/update to the calculator display and parse it into an integer/number, as it is initially input as a string
            display.textContent = displayValue;
            n1 = parseInt(displayValue);

        } else {
            // But if the operator is already chosen and there is already a result from an operation shown on the display, remove that class, updating a new n1 with whatever value the result was and setting n2 to undefined, effectively resetting that value, allowing the reuse of the result for shortened calculations (for e.g.: enter 2+3, click enter, click + 2, click enter, so, the result of the second calculation would be 5 + 2).
            if (displayValue && display.classList.contains("result")) {
                display.classList.remove("result");
                n1 = result;
                secValue = undefined;
            }

            if (!eqlBtnFlag) {
                if (!secValue) {
                    secValue = buttons.id;
                } else if (secValue) {
                    secValue += buttons.id;
                }
    
                display.textContent = secValue;
                console.log(secValue);
    
                n2 = parseInt(secValue);
            } else {
                display.classList.add("result");
            }
        }
    });
});

// Listener for the division button
divBtn.addEventListener("click", () => {
    // Updating the operator
    slOperator = "/";

    // Explicitly saying that the button was already pressed one time, preventing the further clicks of the button to trigger calculations, so the user has the limitation to only click the operator buttons one time per operation, preventing "spamming" the buttons. This strategy repeats for every operation
    if (manyPressed < 1) {
        if (!newOperation) {
            isOperator = true;
            divBtnFlag = true;
            newOperation = true;
        } else {
            // Proccing (aka triggering) the equal button to show the result when the user clicks an operator button when a result is already displayed, allowing for continuos calculations. This strategy repeats for every operation
            eqlBtn.click();
        }
    }
});

// Listener for the multiplication button
mltBtn.addEventListener("click", () => {
    slOperator = "*";
    if (manyPressed < 1) {
        if (!newOperation) {
            isOperator = true;
            mltBtnFlag = true;
            newOperation = true;
        } else {
            eqlBtn.click();
        }
    }
});

// Listener for the subtraction button
subBtn.addEventListener("click", () => {
    slOperator = "-";
    if (manyPressed < 1) {
        if (!newOperation) {
            isOperator = true;
            subBtnFlag = true;
            newOperation = true;
        } else {
            eqlBtn.click();
        }
    }
});

// Listener for the sum button
sumBth.addEventListener("click", () => {
    slOperator = "+";
    if (manyPressed < 1) {
        if (!newOperation) {
            isOperator = true;
            sumBtnFlag = true;
            newOperation = true;
        } else {
            eqlBtn.click();
        }
    }
});


dotBtn.addEventListener("click", () => {

});

// Listener for the equals button. 
eqlBtn.addEventListener("click", () => {
    eqlBtnFlag = !eqlBtnFlag;
    // The newOperation flag is checked for the calculations start. This acts as a stopper if there isn't any number set for an operation yet
    if (newOperation) {
        // When the user clicks enter, proceed to the operate function, which does all the calculations
        operate(slOperator, n1, n2);
        isOperator = true;
        newOperation = true;
        manyPressed++;
    }
});

// Clear button listener, clears all inputs and variables, resetting the calculator
clrBtn.addEventListener("click", () => {
    divBtnFlag = false;
    mltBtnFlag = false;
    subBtnFlag = false;
    sumBtnFlag = false;
    eqlBtnFlag = false;
    dotBtnFlag = false;
    displayValue = 0;
    secValue = 0;
    isOperator = false;
    slOperator = "";
    n1 = 0;
    n2 = 0;
    result = 0;
    newOperation = false;
    display.textContent = 0;
});


// Basic functions

// Sum function, adds numbers
function add(num1, num2) {
    if ((n1) && (n2)) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        let sum = (num1 + num2);
        sumBtnFlag = !sumBtnFlag;
        display.textContent = sum;
        return sum;
    }
}

// Subtraction function, subtracts numbers
function subtract(num1, num2) {
    if ((n1) && (n2)) {
        let sum = (num1 - num2);
        subBtnFlag = !subBtnFlag;
        return sum;
    }
}

// Multiplication function, multiplies numbers
function multiply(num1, num2) {
    if ((n1) && (n2)) {
        let product = (num1 * num2);
        mltBtnFlag = !mltBtnFlag;
        return product;
    }
}

// Division function, divides numbers
function divide(num1, num2) {
    if ((n1) && (n2)) {
        let product = (num1 / num2);
        divBtnFlag = !divBtnFlag;
        result = product;
        return product;
    }
}

// Operate function, which is called to determine what operation to use, and the respective numbers that will be used in the operation
function operate(operator, num1, num2) {
    if ((!isOperator) || (!n1) || (!n2)) {
        console.log(n1);
        console.log(n2);
    } else if ((isOperator) && (n1) && ((n2) && (eqlBtnFlag))){

        if (operator === "+") {
            result = add(num1, num2);
        } else if (operator === "-") {
            result = subtract(num1, num2);
        } else if (operator === "*") {
            result = multiply(num1, num2);
        } else if (operator === "/") {
            result = divide(num1, num2);
        } else {
            return "Invalid Operator!";
        }
        display.textContent = result;
        display.classList.add("result");

        // Setting the new n1 to the result, in case the user wants to do more shortened calculations and resetting the manyPressed flag/counter
        n1 = result;
        eqlBtnFlag = !eqlBtnFlag;
        manyPressed = 0;
        return result;
    }

}


