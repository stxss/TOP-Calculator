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

// Setting the flags of each operator button
let divBtnFlag = false; 
let mltBtnFlag = false;
let subBtnFlag = false;
let sumBtnFlag = false;
let eqlBtnFlag = false;
let dotBtnFlag = false;

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

// Adding a listener for each of the number buttons, that will update the display when clicked.
buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {


        
        if (!isOperator) {
            if (!displayValue) {
                displayValue = buttons.id;
            } else if (displayValue) {
                displayValue += buttons.id;
            }

            display.textContent = displayValue;
            n1 = parseInt(displayValue);

        } else {
            if (!secValue) {
                secValue = buttons.id;
            } else if (secValue) {
                secValue += buttons.id;
            }

            display.textContent = secValue;
            console.log(secValue);

            n2 = parseInt(secValue);
            

        }

        // Is the operator flag true?
        // If it is false
        if (!isOperator) {
            // write to n1
        } else {
            // write to n2
        }

        // Is n1 true? (aka does it have a number?)
        // If it is false
        if (!n1) {
            // write to n1
        } else {
            // n1 is true, but is the operator flag true?
            // If it is false
            if (!isOperator) {
                // write to n1
            } else {
                // write to n2
            }
        }

        // Is n2 true? (aka does it have a number?)
        if (!n2) {
            // n2 is false, but is the operator flag true?
            // If it is false
            if (!isOperator) {
                // write to n1
            } else {
                // write to n2
            }
        } else {
            // n2 is true, but is the equal button flag true?
            // If it is false
            if (!eqlBtnFlag) {
                // Continue writing to n2
            } else {
                // output the number
            }
        }


        if ((!isOperator) || (!n1) || (!n2)) {
            console.log(isOperator);
            console.log(n1);
            console.log(n2);
        } else if ((isOperator) && (n1) && ((!n2) || (!eqlBtnFlag))){
            operate(slOperator, displayValue, secValue);
            isOperator = !isOperator;
            n1 = undefined;
            n2 = undefined;
        }
    });
});


divBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "/";

    divBtnFlag = !divBtnFlag;

    console.log(`divider operator is ${divBtnFlag}`);
});

mltBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "*";

    mltBtnFlag = !mltBtnFlag;

    console.log(`multiplication operator is ${mltBtnFlag}`);
});

subBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "-";

    subBtnFlag = !subBtnFlag;

    console.log(`sub operator is ${subBtnFlag}`);
});

sumBth.addEventListener("click", () => {
    isOperator = true;
    slOperator = "+";

    sumBtnFlag = !sumBtnFlag;

    console.log(`sum operator is ${sumBtnFlag}`);
});


dotBtn.addEventListener("click", () => {

});

eqlBtn.addEventListener("click", () => {

});


// Basic functions

// Sum function, adds numbers
function add(num1, num2) {
    if ((n1) && (n2)) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        let sum = (num1 + num2);

        console.log(sum);
        sumBtnFlag = !sumBtnFlag;
        display.textContent = sum;
        return sum;
    }
}

// Subtraction function, subtracts numbers
function subtract(num1, num2) {
    if ((n1) && (n2)) {
        let sum = (num1 - num2);

        console.log(sum);
        subBtnFlag = !subBtnFlag;

        return sum;
    }
}

// Multiplication function, multiplies numbers
function multiply(num1, num2) {
    if ((n1) && (n2)) {
        let product = (num1 * num2);

        console.log(product);
        mltBtnFlag = !mltBtnFlag;

        return product;
    }
}

// Division function, divides numbers
function divide(num1, num2) {
    if ((n1) && (n2)) {
        let product = (num1 / num2);

        console.log(product);
        divBtnFlag = !divBtnFlag;

        return product;
    }
}

// Operate function, which is called to determine what operation to use, and the respective numbers that will be used in the operation
function operate(operator, num1, num2) {

    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        subtract(num1, num2);
    } else if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "/") {
        divide(num1, num2);
    } else {
        return "Invalid Operator!";
    }
}


