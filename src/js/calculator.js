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

function myValue(value) {
    if (result === undefined) {
        let currentNumber = document.getElementById('currentNumber').innerHTML; 
        currentNumber = currentNumber + value
        if (operator === undefined) {
            firstValue = currentNumber
        } 
        else {
            secondValue = currentNumber.replace(firstValue, '').replace(operator, '')
            if (operator == "/", secondValue == 0) {
                alert("Błąd operacji. Nie można dzielić przez 0!")
                secondValue = undefined
                currentNumber = currentNumber.substring(0, currentNumber.length - 1);
            }
        }
        document.getElementById('currentNumber').innerHTML = currentNumber;
    } else {
        result = undefined
        document.getElementById('currentNumber').innerHTML = value;
        firstValue = value
    }
}

function myOperator(localOperator) {
    let currentNumber = document.getElementById('currentNumber').innerHTML; 
    currentNumber = currentNumber + localOperator
    document.getElementById('currentNumber').innerHTML = currentNumber;
    operator = localOperator
}

buttonNumberOne.addEventListener("click", function() {myValue("1")})

buttonNumberTwo.addEventListener("click", function() {myValue("2")})

buttonNumberThree.addEventListener("click", function() {myValue("3")})

buttonNumberFour.addEventListener("click", function() {myValue("4")})

buttonNumberFive.addEventListener("click", function() {myValue("5")})

buttonNumberSix.addEventListener("click", function() {myValue("6")})

buttonNumberSeven.addEventListener("click", function() {myValue("7")})

buttonNumberEight.addEventListener("click", function() {myValue("8")})

buttonNumberNine.addEventListener("click", function() {myValue("9")})

buttonNumberZero.addEventListener("click", function() {myValue("0")},)

buttonDot.addEventListener("click", function() {myValue(".")})

additionSign.addEventListener("click", function() {myOperator("+")})
subtractionSign.addEventListener("click", function() {myOperator("-")})
multiplicationSign.addEventListener("click", function() {myOperator("*")})
divisionSign.addEventListener("click", function() {myOperator("/")})

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


