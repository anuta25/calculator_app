const buttons = document.querySelectorAll(".btn-number, .btn-operator");
console.log(buttons);
const display = document.querySelector(".display");
console.log(display);


let displayData= "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.getAttribute("data-num");
             console.log(buttonValue);
        
        displayData += buttonValue;
             console.log(displayData)
        display.textContent = displayData;
             
    })
})

const equalsButton = document.querySelector(".btn-equals");
equalsButton.addEventListener("click", ()=> {
    displayData= eval(displayData);
    display.textContent = displayData;
})

const clearButton = document.querySelector(".btn-clear");
clearButton.addEventListener("click", ()=> {
    displayData = "";
    display.textContent = displayData;
})