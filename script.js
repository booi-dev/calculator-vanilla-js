// VALUE DECLARATION

let firstNum = "0";
let secondNum = "0";

// SELECTORS

const display = document.querySelector(".display")

const keypad = document.querySelector(".keypad")
const numKey = keypad.querySelectorAll(".num-key")

const ACBtn = document.querySelector(`.secondary-operators[data-key ="allClear"]`)
const CBtn = document.querySelector(`.secondary-operators[data-key ="clear"]`)


// FUNCTIONS

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

function printOnDisplay(content) {
    display.innerText = content
}

function allClear() {
    firstNum = "0"
    printOnDisplay(firstNum)
    // console.log("delete all")
}

function clear() {
    if (firstNum == "0") return;

    if (firstNum.length == 1) {
        firstNum = "0";
    } else {
        const lastDigitDeletedNum = firstNum.slice(0, -1);
        firstNum = lastDigitDeletedNum;
    }
    printOnDisplay(firstNum);
    // console.log("delete")
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
})

CBtn.addEventListener("click", () => {
    clear()
})

window.onload = () => {
    console.log("page is fully loaded");
    printOnDisplay(firstNum)
};



