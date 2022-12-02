// VALUE DECLARATION

let firstNum = "0";
let secondNum = "0";
let result = "0";
let operator = "none"

// SELECTORS

// const displayContainer = document.querySelector(".container-primay-display");
const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const display3 = document.querySelector(".display3");
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
    if (content.length > 10) {
        return
    }
    if (content.length == 7) {
        display.classList.add("reduceDisplayFontx1")
        display.classList.remove("reduceDisplayFontx2", "reduceDisplayFontx3")
    } else if (content.length == 8) {
        display.classList.add("reduceDisplayFontx2")
        display.classList.remove("reduceDisplayFontx1", "reduceDisplayFontx3")
    } else if (content.length == 9) {
        display.classList.add("reduceDisplayFontx3")
        display.classList.remove("reduceDisplayFontx1", "reduceDisplayFontx2")
    } else display.classList.remove("reduceDisplayFontx1", "reduceDisplayFontx2", "reduceDisplayFontx3")

    display.innerText = content;
}

function updateDisplay2(content) {
    display2.innerText = content
}

function updateDisplay3(content) {
    display3.innerText = content
}

function updateOperatorDisplay(operator) {
    if (operator === "division") {
        operatorDisplay.innerText = "÷"
    } else if (operator === "multiply") {
        operatorDisplay.innerText = "x"
    } else if (operator === "subtraction") {
        operatorDisplay.innerText = "-"
    } else if (operator === "addition") {
        operatorDisplay.innerText = "+"
    } else if (operator === "none") {
        operatorDisplay.innerText = "NA"
    }
}

// CLEAR or DELETE FUNCTIONS

function allClear() {
    firstNum = "0";
    secondNum = "0";
    operator = "none";
    result = "0";
    updateDisplay("0")
    updateDisplay2("")
    updateOperatorDisplay(operator);
    updateDisplay3("")
    console.log(`first num:- ${firstNum}, Second Num:- ${secondNum}, Operator:- ${operator}, result:- ${result}`)
}

// Bring back the firstNum to display1
function clearDisplay2() {
    operator = "none"
    updateOperatorDisplay(operator)
    updateDisplay2(secondNum)
    updateDisplay(firstNum)
    // console.log("2nd num is zero")
}

function clear() {
    if (firstNum == "0") return

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
        if (secondNum === "0") clearDisplay2()
        else clearSecondNum()
    }
}

// UPDATE NUMBER FUNCTIONS

function updateNumber(e) {
    let number = e.target.dataset.num;
    // console.log(`first num: ${firstNum}, Second Num: ${secondNum}, Operator: ${operator}, Result: ${result}`)
    let updatedFirstNum;
    let updatedSecondNum;

    if (result != "0") {
        firstNum = result;
        secondNum = number;
        updateDisplay(number)
        updateDisplay2(result)
        updateDisplay3("")
        result = "0"
    }
    else if (operator != "none") {
        updatedSecondNum = updateSecondNum(number)
        updateDisplay(updatedSecondNum)
    }
    else {
        updatedFirstNum = updateFirstNum(number)
        updateDisplay(updatedFirstNum)
    }
    // console.log(`first num: ${firstNum}, Second Num: ${secondNum}, Operator: ${operator}, Result: ${result}`)
}

function updateFirstNum(params) {
    if (firstNum.length >= 9) return firstNum;
    if (firstNum == 0) {
        return firstNum = params;
    } else return firstNum += params;
}

function updateSecondNum(params) {
    if (secondNum.length >= 9) return secondNum;
    if (secondNum == 0) {
        return secondNum = params;
    } else return secondNum += params;
}

// OPERATORS FUNCTIONS

function updateOperator(e) {

    console.log(`first num: ${firstNum}, Second Num: ${secondNum}, Operator: ${operator}, Result: ${result}`)

    if (result != "0") {
        firstNum = result;
        secondNum = "0";
        updateDisplay2(result)

        // updateDisplay("0")
        // operator = e.target.dataset.key
        // updateOperatorDisplay(operator)
        // updateDisplay3("")

        result = "0"
        console.log("result found")
    } else if (firstNum != "0" && secondNum != "0") {
        updateDisplay3(secondNum)
        operate(firstNum, secondNum, operator)
        updateDisplay2(result)

        // updateDisplay("0")
        // operator = e.target.dataset.key
        // updateOperatorDisplay(operator)
        // updateDisplay3("")

        console.log("first and second")
    } else {
        updateDisplay2(firstNum)

        // updateDisplay("0")
        // operator = e.target.dataset.key
        // updateOperatorDisplay(operator)
        // updateDisplay3("")
        console.log("Lasting")
    }

    updateDisplay("0")
    operator = e.target.dataset.key
    updateOperatorDisplay(operator)
    updateDisplay3("")

    console.log(`first num: ${firstNum}, Second Num: ${secondNum}, Operator: ${operator}, Result: ${result}`)
}

function operate(a, b, operator) {
    // console.log(`first num: ${firstNum}, Second Num: ${secondNum}, Operator: ${operator}, Result: ${result}`)
    let calculatedResult = 0;
    a = +a;
    b = +b;
    if (operator === "division") {
        calculatedResult = division(a, b)
    } else if (operator === "multiply") {
        calculatedResult = multiplication(a, b)
    } else if (operator === "subtraction") {
        calculatedResult = subtraction(a, b)
    } else if (operator === "addition") {
        calculatedResult = addition(a, b)
    }

    result = calculatedResult.toString();

    updateDisplay(result)
    updateDisplay3(secondNum)

    console.log(calculatedResult)

    if (calculatedResult.toString().length >= 10) {
        updateDisplay("BIG NUM")
    }

    if (isFloat(calculatedResult)) {
        result = calculatedResult.toFixed(2);
        updateDisplay(result)
    }
}

//

function isFloat(n) {
    return n === +n && n !== (n | 0);
}
isFloat(12);


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
})

// APP INITIALIZATION

window.onload = () => {
    operatorDisplay.innerText = "NA";
    updateDisplay("0")
    updateDisplay2("")
    updateDisplay3("")
};

