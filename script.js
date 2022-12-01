function allClear() {
    console.log("delete all")
}

function clear() {
    console.log("delete one digit")
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

function subtraction(a, b) {
    return a - b;
}

function addition(a, b) {
    return a + b;
}

function negation(data) {
    return data * -1;
}

// Selectors

const display = document.querySelector(".display")

function printOnDisplay(content) {
    display.innerText = content
}

const keypad = document.querySelector(".keypad")
const key = keypad.querySelectorAll("div")


// Click and Display function

let firstNum = "0";
let secondNum = "0";

key.forEach(element => {
    element.addEventListener("click", updateDisplay)
})


function updateDisplay(e) {
    const data = getDataSet(e);
    console.log("data num", data.num)
    if (data.num) {
        const updatedFirstNum = updateFirstNum(data.num)
        printOnDisplay(updatedFirstNum)
    }
}

function getDataSet(e) {
    let dataSet = e.target.dataset
    return dataSet;
}

function updateFirstNum(params) {
    console.log("update first number", firstNum, params)

    if (firstNum == 0) {
        return firstNum = params;
    } else return firstNum += params;
}

function updateSecondNum(params) {
    secondNum += params;
}


function operate(a, b, operator) {
    let result;
    if (operator === "division") {
        division(a, b)
    } else if (operator === "multiply") {
        multiplication(a, b)
    } else if (operator === "subtraction") {
        subtraction(a, b)
    } else if (operator === "addition") {
        addition(a, b)
    }
}


window.onload = () => {
    console.log("page is fully loaded");
    printOnDisplay(firstNum)
};