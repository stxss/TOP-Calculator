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

// Flag for a new operation after the first
let newOperation = false; 

// Adding a listener for each of the number buttons, that will update the display when clicked.
buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {

        if (!isOperator) {
            if (!displayValue) {
                displayValue = buttons.id;
            } else if (displayValue && display.classList.contains("result")) {
                display.classList.remove("result");
                displayValue = buttons.id;
            } else if (displayValue && !display.classList.contains("result")) {
                displayValue += buttons.id;
            }

            display.textContent = displayValue;
            n1 = parseInt(displayValue);

        } else {
            if (displayValue && display.classList.contains("result")) {
                display.classList.remove("result");
                console.log(`new n1 is ${result}`);
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

divBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "/";

    if (!newOperation) {
        divBtnFlag = true;
        newOperation = true;
    } else {
        divBtnFlag = true;
        eqlBtn.click();
    }

    console.log(`divider operator is ${divBtnFlag}`);
});

mltBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "*";

    if (!newOperation) {
        mltBtnFlag = true;
        newOperation = true;
    } else {
        mltBtnFlag = true;
        eqlBtn.click();
    }

    console.log(`multiplication operator is ${mltBtnFlag}`);
});

subBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "-";

    if (!newOperation) {
        subBtnFlag = true;
        newOperation = true;
    } else {
        subBtnFlag = true;
        eqlBtn.click();
    }

    console.log(`sub operator is ${subBtnFlag}`);
});

sumBth.addEventListener("click", () => {
    isOperator = true;
    slOperator = "+";

    if (!newOperation) {
        sumBtnFlag = true;
        newOperation = true;
    } else {
        sumBtnFlag = true;
        eqlBtn.click();
    }

    console.log(`sum operator is ${sumBtnFlag}`);
});


dotBtn.addEventListener("click", () => {

});

eqlBtn.addEventListener("click", () => {
    isOperator = true;
    eqlBtnFlag = !eqlBtnFlag;
    console.log(`equals is ${eqlBtnFlag}`);
    operate(slOperator, n1, n2);

});

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
        console.log(isOperator);
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
        console.log(result);
        display.textContent = result;

        display.classList.add("result");

        n1 = result;
        eqlBtnFlag = !eqlBtnFlag;
        return result;
    }

}


