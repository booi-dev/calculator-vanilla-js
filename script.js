// VALUE DECLARATION

let firstNum = "0";
let secondNum = "0";

// SELECTORS

const display = document.querySelector(".display")

const keypad = document.querySelector(".keypad")
const numKey = keypad.querySelectorAll(".num-key")

const ACBtn = document.querySelector(`.secondary-operators[data-key ="allClear"]`)


// FUNCTIONS

function printOnDisplay(content) {
    display.innerText = content
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

// Secondary Functions

function allClear() {
    firstNum = "0"
    printOnDisplay(firstNum)
    console.log("delete all")
}

function clear() {
    console.log("delete one digit")
}


function updateDisplay(e) {
    const data = getDataSet(e);
    // console.log("data num", data.num)
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
    // console.log("update first number", firstNum, params)
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


// EVENT LISTERNERS

numKey.forEach(element => {
    element.addEventListener("click", updateDisplay)
})

ACBtn.addEventListener("click", () => {
    allClear()
    console.log("Delete")
})

window.onload = () => {
    console.log("page is fully loaded");
    printOnDisplay(firstNum)
};