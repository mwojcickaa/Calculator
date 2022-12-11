const buttonNumberOne = document.getElementById('number1');
const buttonNumberTwo = document.getElementById('number2');
const buttonNumberThree = document.getElementById('number3');
const buttonNumberFour = document.getElementById('number4');
const buttonNumberFive = document.getElementById('number5');
const buttonNumberSix = document.getElementById('number6');
const buttonNumberSeven = document.getElementById('number7');
const buttonNumberEight = document.getElementById('number8');
const buttonNumberNine = document.getElementById('number9');
const buttonNumberZero = document.getElementById('number0');
const buttonDot = document.getElementById('dot')


const additionSign = document.getElementById('operator-addition');
const subtractionSign = document.getElementById('operator-subtraction');
const multiplicationSign = document.getElementById('operator-multiplication');
const divisionSign = document.getElementById('operator-division');
const clearSign = document.getElementById('clear');
const equalsSign = document.getElementById('operator-equals');

let firstValue;
let secondValue;
let operator;
let result;

const valueOperatorArray = [];

function myValueAndOperator(value) {
    if (typeof value === "string") {
        if (typeof valueOperatorArray[valueOperatorArray.length - 1] === "string") {
            valueOperatorArray.splice(valueOperatorArray.length - 1, 1, value)
        } else {
            valueOperatorArray.push(value)
        }
    } else {
        if (typeof valueOperatorArray[valueOperatorArray.length - 1] === "number") {
            let text = value.toString()
            let currentNumber = valueOperatorArray[valueOperatorArray.length - 1].toString() + value.toString()
            valueOperatorArray[valueOperatorArray.length - 1] = Number(currentNumber)
        } else {
            valueOperatorArray.push(value)
        }
    }
}

let currentNumber = valueOperatorArray.join('')
document.getElementById('currentNumber').innerHTML = currentNumber;

buttonNumberOne.addEventListener("click", function () { myValueAndOperator(1) })

buttonNumberTwo.addEventListener("click", function () { myValueAndOperator(2) })

buttonNumberThree.addEventListener("click", function () { myValueAndOperator(3) })

buttonNumberFour.addEventListener("click", function () { myValueAndOperator(4) })

buttonNumberFive.addEventListener("click", function () { myValueAndOperator(5) })

buttonNumberSix.addEventListener("click", function () { myValueAndOperator(6) })

buttonNumberSeven.addEventListener("click", function () { myValueAndOperator(7) })

buttonNumberEight.addEventListener("click", function () { myValueAndOperator(8) })

buttonNumberNine.addEventListener("click", function () { myValueAndOperator(9) })

buttonNumberZero.addEventListener("click", function () { myValueAndOperator(0) },)

buttonDot.addEventListener("click", function () { myValueAndOperator(".") })

additionSign.addEventListener("click", function () { myValueAndOperator("+") })
subtractionSign.addEventListener("click", function () { myValueAndOperator("-") })
multiplicationSign.addEventListener("click", function () { myValueAndOperator("*") })
divisionSign.addEventListener("click", function () { myValueAndOperator("/") })

equalsSign.addEventListener("click", function () {
    if (firstValue != undefined, secondValue != undefined) {
        if (operator === "+") {
            result = Number(firstValue) + Number(secondValue)
            document.getElementById('currentNumber').innerHTML = "";
            document.getElementById('currentNumber').innerHTML = result;
        }
        else if (operator === "-") {
            result = Number(firstValue) - Number(secondValue)
            document.getElementById('currentNumber').innerHTML = "";
            document.getElementById('currentNumber').innerHTML = result;
        }
        else if (operator === "*") {
            result = Number(firstValue) * Number(secondValue)
            document.getElementById('currentNumber').innerHTML = "";
            document.getElementById('currentNumber').innerHTML = result;
        }
        else if (operator === "/") {
            result = Number(firstValue) / Number(secondValue)
            document.getElementById('currentNumber').innerHTML = "";
            document.getElementById('currentNumber').innerHTML = result;
        }
    }
})

clearSign.addEventListener("click", function () {
    document.getElementById('currentNumber').innerHTML = "";
    firstValue = undefined
    secondValue = undefined
    operator = undefined
})



