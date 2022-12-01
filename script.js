const keypad = document.querySelector(".keypad")
const key = keypad.querySelectorAll("div")

// key.addEventListener("click", getDataKey)

key.forEach(element => {
    element.addEventListener("click", getDataKey)
})

function getDataKey(e) {
    console.log(e.target.dataset.key)
}

