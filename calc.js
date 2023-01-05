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
        console.log("Invalid Operator!");
    }
}



add(2,3);
subtract(5,2);
multiply(4,3);
divide(1,3);
divide(4,2);
console.log("-------");
operate("+", 5, 5);
operate("-", 5, 5);
operate("*", 5, 5);
operate("/", 5, 5);
operate("#", 5, 5);
