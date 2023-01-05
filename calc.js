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


// Setting the display value to empty, at first
let displayValue;

// Creating the second value, empty at first
let secValue;

// Creating a flag for if the operator is active aka if there is an operator selected, initially set to false
let isOperator = false;

// Creating the variable to store the operator, once it is selected
let slOperator = "";

//  Passing the number values to numbers
let n1 = parseInt(displayValue);
let n2 = parseInt(secValue);

// Adding a listener for each of the number buttons, that will update the display when clicked.
buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        if (!displayValue) {
            displayValue = buttons.id;
        } else if (displayValue) {
            displayValue += buttons.id;
        }
        display.textContent = displayValue;
        console.log(isOperator);
        
        if (isOperator) {
            operate(slOperator, displayValue, secValue);
        }
    });
});


divBtn.addEventListener("click", () => {
    isOperator = true;
    slOperator = "/";
    // let n1 = parseInt(displayValue);
    // let n2 = parseInt(secValue);

    if ((n1) && (n2)) {
        console.log(n1 / n2);
    } else {
        console.log("waiting for another number");
    }

    // console.log(divBtn.textContent);
});

mltBtn.addEventListener("click", () => {
    // console.log(mltBtn.textContent);
});

subBtn.addEventListener("click", () => {
    // console.log(subBtn.textContent);
});

sumBth.addEventListener("click", () => {
    // console.log(sumBth.textContent);
});

eqlBtn.addEventListener("click", () => {
    // console.log(eqlBtn.textContent);
});

dotBtn.addEventListener("click", () => {
    // console.log(dotBtn.textContent);
});



// Basic functions

// Sum function, adds numbers
function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

// Subtraction function, subtracts numbers
function subtract(num1, num2) {
    let sum = num1 - num2;
    console.log(sum);
    return sum;
}

// Multiplication function, multiplies numbers
function multiply(num1, num2) {
    let product = num1 * num2;
    console.log(product);
    return product;
}

// Division function, divides numbers
function divide(num1, num2) {
    let product = (num1 / num2);
    console.log(product);
    return product;
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


