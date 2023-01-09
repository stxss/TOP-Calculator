// Selecting the number buttons 
let buttons = document.querySelectorAll(".buttons .num");

// Selecting the display screen
let display = document.querySelector(".screen");

// Selecting the operator, equals, delete, clear and dot/comma separator buttons
let divBtn = document.querySelector(".divide");
let mltBtn = document.querySelector(".multiply");
let subBtn = document.querySelector(".subtract");
let sumBtn = document.querySelector(".sum");
let eqlBtn = document.querySelector("button.equals");
let dotBtn = document.querySelector(".dot");
let clrBtn = document.querySelector(".clear");

// How many times the operation button was pressed, this flag is used to prevent multiple button presses triggering the operation actions
let manyPressed = 0; 

// Setting the display value to empty, at first
let displayValue = 0;
display.textContent = `${displayValue}`;

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


// Adding a listener for each of the number buttons, that will update the display when clicked.
buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        // If the operator isn't chosen/active/clicked yet, then update the first number until an operator is chosen

        if (!isOperator) {
            if (!displayValue) {
                displayValue = buttons.id;
            } else if (displayValue) {
                displayValue += buttons.id;
                n1 = result;
            }

            // Reflect the number insertion/update to the calculator display and parse it into an integer/number, as it is initially input as a string
            display.textContent = displayValue;
            n1 = parseInt(displayValue);
        } else {
            // But if the operator is already chosen and there is already a result from an operation shown on the display, remove that class, updating a new n1 with whatever value the result was and setting n2 to undefined, effectively resetting that value, allowing the reuse of the result for shortened calculations (for e.g.: enter 2+3, click enter, click + 2, click enter, so, the result of the second calculation would be 5 + 2).
            if (!secValue) {
                secValue = buttons.id;
            } else if (secValue && secValue.length < 1) {
                secValue = buttons.id;
            } else if (secValue && secValue.length >= 1) {
                secValue += buttons.id;
            }
            display.textContent = secValue;
            n2 = parseInt(secValue);
        }
    });
});


function handleOperatorClick(operator) {


    if ((isOperator) && (n1) && (n2)) {
        eqlBtn.click();
    }
    isOperator = true;
    slOperator = operator;
    secValue = 0;
    manyPressed++;

    // // Explicitly saying that the button was already pressed one time, preventing the further clicks of the button to trigger calculations, so the user has the limitation to only click the operator buttons one time per operation, preventing "spamming" the buttons. This strategy repeats for every operation
    // if (manyPressed > 1) {
    // // Proccing (aka triggering) the equal button to show the result when the user clicks an operator button when a result is already displayed, allowing for continuos calculations. This strategy repeats for every operation
    //     eqlBtn.click();
    // }
}

// }

// Listener for the division button
divBtn.addEventListener("click", () => {
    handleOperatorClick("/");
});

// Listener for the multiplication button
mltBtn.addEventListener("click", () => {
    handleOperatorClick("*");
});

// Listener for the subtraction button
subBtn.addEventListener("click", () => {
    handleOperatorClick("-");
});

// Listener for the sum button
sumBtn.addEventListener("click", () => {
    handleOperatorClick("+");
});

dotBtn.addEventListener("click", () => {

});

// Listener for the equals button. 
eqlBtn.addEventListener("click", () => {
    // When the user clicks enter, proceed to the operate function, which does all the calculations
    isOperator = true;
    if (slOperator === "/" && n2 === 0) {
        display.textContent = "No divisions by 0!";
        displayValue = 0;
        isOperator = false;
        secValue = 0;
        n1 = 0;
        n2 = 0;
        result = 0;
    } else if (n2) {
        operate(slOperator, n1, n2);
        // operate(slOperator, n1, n2);
        console.log(n1);
        console.log(slOperator);
        console.log(n2);
        console.log(result);
        console.log(`manyPressed is ${manyPressed}`);
        // manyPressed++;
        // manyPressed = 0;
        n1 = result;
    }
});

// Clear button listener, clears all inputs and variables, resetting the calculator
clrBtn.addEventListener("click", () => {
    displayValue = 0;
    display.textContent = 0;
    isOperator = false;
    secValue = 0;
    n1 = 0;
    n2 = 0;
    result = 0;
    manyPressed = 0;
});


// Operate function, which is called to determine what operation to use, and the respective numbers that will be used in the operation
function operate(operator, num1, num2) {

    if ((isOperator) && (num2)){
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        }

        if (isNaN(result)) {
            console.log("Invalid operation!");
        }

        displayValue = parseFloat(result.toFixed(9));
        display.textContent = `${displayValue}`;

        // Setting the new num1 to the result, in case the user wants to do more shortened calculations and resetting the manyPressed flag/counter
        n1 = result;
        isOperator = false;
        // manyPressed = 0;
    }
}

// Todo: take care of when pressing a different operator, for it to 
// Todo: take care of pressing equals before entering all the numbers or symbols;
// Todo: Add floating point numbers (e.g: 2.5 or 31.75, etc...), not allowing for an input of more than one dot, for example by disabling the dot button if there is already one on the display;
// Todo: add a backspace/delete button, so the user can delete a wrong number;
// Todo: add keyboard support;
// Todo: make it look nice;
// ! take care of when doing any operation and instead of clicking =, clicking any other operator, it concatenates the numbers instead of operating them
