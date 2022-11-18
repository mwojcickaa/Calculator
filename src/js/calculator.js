
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number0 = document.getElementById('number0');

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

number1.addEventListener("click", function() {myValue("1")})

number2.addEventListener("click", function() {myValue("2")})

number3.addEventListener("click", function() {myValue("3")})

number4.addEventListener("click", function() {myValue("4")})

number5.addEventListener("click", function() {myValue("5")})

number6.addEventListener("click", function() {myValue("6")})

number7.addEventListener("click", function() {myValue("7")})

number8.addEventListener("click", function() {myValue("8")})

number9.addEventListener("click", function() {myValue("9")})

number0.addEventListener("click", function() {myValue("0")})

additionSign.addEventListener("click", function() {myValue("+")})
subtractionSign.addEventListener("click", function() {myValue("-")})
multiplicationSign.addEventListener("click", function() {myValue("*")})
divisionSign.addEventListener("click", function() {myValue("/")})





