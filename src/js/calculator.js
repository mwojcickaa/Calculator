
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

const additionSign = document.getElementById('operator-addition');
const subtractionSign = document.getElementById('operator-subtraction');
const multiplicationSign = document.getElementById('operator-multiplication');
const divisionSign = document.getElementById('operator-division');
const clearSign = document.getElementById('clear');
const equalsSign = document.getElementById('operator-equals');
const currentNumber = document.getElementById('currentNumber');

function myValue(value) {
    let currentNumber = document.getElementById('currentNumber').innerHTML;
    currentNumber = currentNumber + value
    document.getElementById('currentNumber').innerHTML = currentNumber; "12 + 321"
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

buttonNumberZero.addEventListener("click", function() {myValue("0")})

additionSign.addEventListener("click", function() {myValue("+")})
subtractionSign.addEventListener("click", function() {myValue("-")})
multiplicationSign.addEventListener("click", function() {myValue("*")})
divisionSign.addEventListener("click", function() {myValue("/")})





