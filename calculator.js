document.getElementById('toggleBtn').addEventListener('click', function () {
    const calculator = document.getElementById('calculator');
    const button = document.getElementById('toggleBtn');
    const btn_display = document.getElementById('action-btn')
    const display = document.getElementById('display')
    calculator.classList.toggle('maximized');
    btn_display.classList.toggle('enlarge');
    display.classList.toggle('font')
    button.classList.toggle('maximize');
    button.classList.toggle('minimize');

});

document.getElementById('closeBtn').addEventListener('click', function () {
    const calculator = document.getElementById('calculator');
    calculator.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calc-btn");
    let currentInput = "0";
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                currentInput = "0";
                operator = null;
                previousInput = null;
            } else if (value === "=") {
                if (operator && previousInput !== null) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    operator = null;
                    previousInput = null;
                }
            } else if( value === "!"){
                currentInput = -currentInput;
                operator = null;
                previousInput = null;
            }else if( value === "sqr"){
                currentInput = currentInput*currentInput;
                operator = null;
                previousInput = null;
            } else if( value === "sqrt"){
                currentInput = Math.sqrt(currentInput);
                operator = null;
                previousInput = null;
            }else if( value === "1/x"){
                if (currentInput === "0"){
                    currentInput="Cannot divide by Zero!"
                    operator = null;
                    previousInput = null;
                }
                else{
                    currentInput = 1/currentInput;
                    operator = null;
                    previousInput = null;
                }
            }
            else if (["+", "-", "*", "/","X"].includes(value)) {
                if (operator && previousInput !== null) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                }
                operator = value;
                previousInput = currentInput;
                currentInput = "0";
            } else {
                if (currentInput === "0") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            }
            display.textContent = currentInput;
        });
    });

    function evaluate(num1, num2, operator) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        switch (operator) {
            case "+":
                return (a + b).toString();
            case "-":
                return (a - b).toString();
            case "X":
                return (a * b).toString();
            case "/":
                return (a / b).toString();
            default:
                return num2;
        }
    }
});

