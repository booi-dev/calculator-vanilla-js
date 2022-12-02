// VALUE DECLARATION

let firstNum = "0";
let secondNum = "0";
let operator = ""

// SELECTORS

const display = document.querySelector(".display")

const keypad = document.querySelector(".keypad")
const numKey = keypad.querySelectorAll(".num-key")

const ACBtn = document.querySelector(`.secondary-operators[data-key ="allClear"]`)
const CBtn = document.querySelector(`.secondary-operators[data-key ="clear"]`)

const primaryOperatorBtn = document.querySelectorAll(`.primary-operators`)
const equalsBtn = document.querySelector(`.equals-operators`)

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
    if (content.length > 10) return
    if (content.length == 8) {
        display.classList.add("reduceDisplayFontx1")
        display.classList.remove("reduceDisplayFontx2", "reduceDisplayFontx3")
    } else if (content.length == 9) {
        display.classList.add("reduceDisplayFontx2")
        display.classList.remove("reduceDisplayFontx1", "reduceDisplayFontx3")
    } else if (content.length == 10) {
        display.classList.add("reduceDisplayFontx3")
        display.classList.remove("reduceDisplayFontx1", "reduceDisplayFontx2")
    } else display.classList.remove("reduceDisplayFontx1", "reduceDisplayFontx2", "reduceDisplayFontx3")

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
    if (firstNum == 0) {
        return firstNum = params;
    } else return firstNum += params;
}

function updateSecondNum(params) {
    secondNum += params;
}

function updateOperator(e) {
    operator = e.target.dataset.key
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

primaryOperatorBtn.forEach(element => {
    element.addEventListener("click", updateOperator)
})

ACBtn.addEventListener("click", () => {
    allClear()
})

CBtn.addEventListener("click", () => {
    clear()
})

equalsBtn.addEventListener("click", () => {
    console.log("equal btn press")
})


// APP INITIALIZATION

window.onload = () => {
    console.log("page is fully loaded");
    printOnDisplay(firstNum)
};



// testing usages

function cosoleLogging(e) {
    console.log(e.target.dataset.key)
}

