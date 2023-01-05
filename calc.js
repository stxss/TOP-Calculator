// Select the necessary items from the file
let calculator = document.querySelector(".calculator");
let numbers = document.querySelectorAll(".numbers .num");
let display = document.querySelector(".screen");

let displayValue;
numbers.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        if (!displayValue) {
            displayValue = numbers.id;
        } else if (displayValue) {
            displayValue += numbers.id;
        }
        display.textContent = displayValue;
        // console.log(numbers.id);
    });
});




















// Basic functions

function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}


function subtract(num1, num2) {
    let sum = num1 - num2;
    console.log(sum);
    return sum;
}

function multiply(num1, num2) {
    let product = num1 * num2;
    console.log(product);
    return product;
}

function divide(num1, num2) {
    let product = (num1 / num2);
    console.log(product);
    return product;
}

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


