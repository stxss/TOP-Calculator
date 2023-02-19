let buttons = document.querySelectorAll(".buttons .num");

let display = document.querySelector(".screen");

let divBtn = document.querySelector(".divide");
let mltBtn = document.querySelector(".multiply");
let subBtn = document.querySelector(".subtract");
let sumBtn = document.querySelector(".sum");
let eqlBtn = document.querySelector("button.equals");
let dotBtn = document.querySelector(".dot");
let clrBtn = document.querySelector(".clear");
let delBtn = document.querySelector(".delete");

let displayValue = 0;
display.textContent = `${displayValue}`;

let secValue;

let isOperator = false;

let slOperator = "";

let dotCountFirst = 0;
let dotCountSecond = 0;

let n1;
let n2;
let result;

buttons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        numberClick(buttons.id);
    });
});

function numberClick(id) {
    if (!isOperator) {
        if (!displayValue) {
            displayValue = id;
        } else if (displayValue) {
            displayValue += id;
            n1 = result;
        }
        display.textContent = displayValue;
        n1 = parseFloat(display.textContent);
    } else {
        if (!secValue) {
            secValue = id;
        } else if (secValue && secValue.length < 1) {
            secValue = id;
        } else if (secValue && secValue.length >= 1) {
            secValue += id;
        }
        display.textContent = secValue;
        n2 = parseFloat(display.textContent);
    }
}

function handleOperatorClick(operator) {
    if (isOperator && n1 && n2) {
        eqlBtn.click();
    }

    isOperator = true;
    slOperator = operator;
    secValue = 0;
}

divBtn.addEventListener("click", () => {
    handleOperatorClick("/");
});

mltBtn.addEventListener("click", () => {
    handleOperatorClick("*");
});

subBtn.addEventListener("click", () => {
    handleOperatorClick("-");
});

sumBtn.addEventListener("click", () => {
    handleOperatorClick("+");
});

dotBtn.addEventListener("click", () => {
    if (!isOperator) {
        dotCountFirst++;
        if (dotCountFirst > 1) {
            return;
        }
    } else {
        dotCountSecond++;
        if (dotCountSecond > 1) {
            return;
        }
    }

    display.textContent += ".";

    if (!isOperator) {
        if (!displayValue) {
            displayValue = "0.";
        } else if (displayValue) {
            displayValue += ".";
        }
    } else {
        if (!secValue) {
            display.textContent = "0.";
            secValue = "0.";
        } else if (secValue && secValue.length < 1) {
            secValue = ".";
        } else if (secValue && secValue.length >= 1) {
            secValue += ".";
        }
    }
});

eqlBtn.addEventListener("click", () => {
    isOperator = true;
    if (slOperator === "/" && n2 === 0) {
        display.textContent = "No divisions by 0!";
        slOperator = "";
        displayValue = 0;
        secValue = 0;
        isOperator = false;
        n1 = 0;
        n2 = 0;
        result = 0;
    } else if (n2) {
        if (n2.toString().endsWith(".")) {
            n2 -= ".";
        }

        operate(slOperator, n1, n2);
        n1 = result;

        if (isNaN(result)) {
            display.textContent = "Invalid operation! Use only numbers!";
        }
    }

    dotCountFirst = 0;
    dotCountSecond = 0;
});

clrBtn.addEventListener("click", () => {
    displayValue = 0;
    display.textContent = 0;
    isOperator = false;
    secValue = 0;
    n1 = 0;
    n2 = 0;
    result = 0;
    dotCountFirst = 0;
    dotCountSecond = 0;
});

delBtn.addEventListener("click", () => {
    if (!isOperator) {
        let val = display.textContent;
        let newVal = val.substring(0, val.length - 1);
        display.textContent = newVal;
        displayValue = display.textContent;
        n1 = parseFloat(displayValue);
    } else {
        let val = display.textContent;
        let newVal = val.substring(0, val.length - 1);
        display.textContent = newVal;
        secValue = display.textContent;
        n2 = parseFloat(secValue);
    }
    dotCountFirst = 0;
    dotCountSecond = 0;
});

function operate(operator, num1, num2) {
    if (isOperator && num2) {
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        }

        displayValue = parseFloat(result.toFixed(9));
        display.textContent = `${displayValue}`;

        n1 = result;
        isOperator = false;
    }
}

document.addEventListener("keydown", (e) => {
    keyboardPress(e.key);
});

function keyboardPress(key) {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (key in numbers) {
        numberClick(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        handleOperatorClick(key);
    } else if (key === ".") {
        dotBtn.click();
    } else if (key === "Enter") {
        eqlBtn.click();
    } else if (key === "Backspace") {
        delBtn.click();
    } else if (key === "Delete") {
        clrBtn.click();
    }
}
