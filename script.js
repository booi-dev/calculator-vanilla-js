// VALUE DECLARATION

let firstNum = "0";
let secondNum = "0";
let operator = "none"
let result = 0;

// SELECTORS

const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const operatorDisplay = document.querySelector(".operatorDisplay");

const keypad = document.querySelector(".keypad");
const numKey = keypad.querySelectorAll(".num-key");

const ACBtn = document.querySelector(`.secondary-operators[data-key ="allClear"]`);
const CBtn = document.querySelector(`.secondary-operators[data-key ="clear"]`);

const primaryOperatorBtn = document.querySelectorAll(`.primary-operators`);
const equalsBtn = document.querySelector(`.equals-operators`);

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

// SECONDARY FUNCTIONS

// UPDATE DISPLAY FUNCTIONS

function updateDisplay(content) {
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

    display.innerText = content;
    console.log("display one is updated", content);
}

function updateDisplay2(content) {
    display2.innerText = content
    console.log("display two is updated", content);
}

// updateDisplay2(secondNum)

operatorDisplay.innerText = "NA";

function updateOperatorDisplay(operator) {
    if (operator === "division") {
        operatorDisplay.innerText = "÷"
    } else if (operator === "multiply") {
        operatorDisplay.innerText = "x"
    } else if (operator === "subtraction") {
        operatorDisplay.innerText = "-"
    } else if (operator === "addition") {
        operatorDisplay.innerText = "x"
    } else if (operator === "none") {
        operatorDisplay.innerText = "NA"
    }
}

// CLEAR or DELETE FUNCTIONS

function allClear() {
    firstNum = "0";
    secondNum = "0";
    operator = "none"
    updateDisplay(firstNum)
    updateDisplay2(secondNum)
    updateOperatorDisplay(operator);
}

// Bring back the firstNum to display1
function clearDisplay2() {
    operator = "none"
    updateOperatorDisplay(operator)
    updateDisplay2(secondNum)
    updateDisplay(firstNum)
    console.log("2nd num is zero")
}


function clear() {
    if (firstNum == "0") return

    console.log(operator)

    function clearFirtNum() {
        if (firstNum.length == 1) { firstNum = "0"; updateDisplay(firstNum); return; }
        const lastDigitDeletedNum = firstNum.slice(0, -1);
        firstNum = lastDigitDeletedNum;
        updateDisplay(firstNum);
    }

    function clearSecondNum() {
        if (secondNum.length == 1) { secondNum = "0"; updateDisplay(secondNum); return }
        const lastDigitDeletedNum = secondNum.slice(0, -1);
        secondNum = lastDigitDeletedNum;
        updateDisplay(secondNum);
    }

    if (operator == "none") clearFirtNum();
    else if (operator != "none") {
        // console.log(firstNum, secondNum)
        if (secondNum === "0") clearDisplay2()
        else clearSecondNum()
    }
}

// UPDATE NUMBER FUNCTIONS

function updateNumber(e) {
    console.log(firstNum, secondNum, operator)

    let updatedFirstNum;
    let updatedSecondNum;

    if (operator != "none") {
        updatedSecondNum = updateSecondNum(e.target.dataset.num)
        updateDisplay(updatedSecondNum)

    } else {
        updatedFirstNum = updateFirstNum(e.target.dataset.num)
        updateDisplay(updatedFirstNum)
    }
}

function updateFirstNum(params) {
    if (firstNum == 0) {
        return firstNum = params;
    } else return firstNum += params;
}

function updateSecondNum(params) {
    if (secondNum == 0) {
        return secondNum = params;
    } else return secondNum += params;
}

function updateOperator(e) {
    if (firstNum == 0) return
    operator = e.target.dataset.key;
    updateDisplay(secondNum);
    updateDisplay2(firstNum);
    updateOperatorDisplay(operator)
}


function operate(a, b, operator) {
    if (operator === "division") {
        result = division(a, b)
    } else if (operator === "multiply") {
        result = multiplication(a, b)
    } else if (operator === "subtraction") {
        result = subtraction(a, b)
    } else if (operator === "addition") {
        result = addition(a, b)
    }
}

// EVENT LISTERNERS

numKey.forEach(element => {
    element.addEventListener("click", updateNumber)
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
    operate(firstNum, secondNum, operator)
    console.log(result)
})

// APP INITIALIZATION

window.onload = () => {
    console.log("page is fully loaded");
    updateDisplay(firstNum)
};

