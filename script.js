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

const display = document.querySelector(".display")

function printOnDisplay(content) {
    display.innerText = content
}



const keypad = document.querySelector(".keypad")
const key = keypad.querySelectorAll("div")

key.forEach(element => {
    element.addEventListener("click", getDataKey)
})

function getDataKey(e) {
    let dataSet = e.target.dataset.key
    console.log(dataSet)
    printOnDisplay(dataSet)
}

