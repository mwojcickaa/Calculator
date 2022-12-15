const buttonNumberOne = document.getElementById('number1')
const buttonNumberTwo = document.getElementById('number2')
const buttonNumberThree = document.getElementById('number3')
const buttonNumberFour = document.getElementById('number4')
const buttonNumberFive = document.getElementById('number5')
const buttonNumberSix = document.getElementById('number6')
const buttonNumberSeven = document.getElementById('number7')
const buttonNumberEight = document.getElementById('number8')
const buttonNumberNine = document.getElementById('number9')
const buttonNumberZero = document.getElementById('number0')
const buttonDot = document.getElementById('dot')

const additionSign = document.getElementById('operator-addition')
const subtractionSign = document.getElementById('operator-subtraction')
const multiplicationSign = document.getElementById('operator-multiplication')
const divisionSign = document.getElementById('operator-division')
const clearSign = document.getElementById('clear')
const equalsSign = document.getElementById('operator-equals')

let firstValue
let secondValue
let operator
let result

let valueOperatorArray = []
function myValueAndOperator(value) {
    if (typeof value === "string" && value != ".") {
        if (isNaN(valueOperatorArray[0])) {
            valueOperatorArray[0] = "0"
            valueOperatorArray[1] = value
        }
        if (isNaN(valueOperatorArray[valueOperatorArray.length - 1])) {
            valueOperatorArray.splice(valueOperatorArray.length - 1, 1, value)
            valueOperatorArray.splice(valueOperatorArray.length - 1, 1,)
        }
        console.log(typeof valueOperatorArray)
        if (valueOperatorArray[valueOperatorArray.length - 1].includes(".") && valueOperatorArray[valueOperatorArray.length - 1].slice(-1) === ".") {
            let str = document.getElementById('currentNumber').innerHTML
            let res = valueOperatorArray[valueOperatorArray.length - 1].replace(".", "")
            valueOperatorArray.splice(valueOperatorArray.length - 1, 1,)
            valueOperatorArray.push(res)
        }
        valueOperatorArray.push(value)
    }
    else {
        if (!isNaN(Number(valueOperatorArray[valueOperatorArray.length - 1]))) {
            if (!(value === "." && valueOperatorArray[valueOperatorArray.length - 1].includes("."))) {
                let convertedValue = value.toString()
                let lastValueInArray = valueOperatorArray[valueOperatorArray.length - 1] + value.toString()
                valueOperatorArray[valueOperatorArray.length - 1] = lastValueInArray
            }
        }
        else {
            if (value === "." && isNaN(Number(valueOperatorArray[valueOperatorArray.length - 1]))) {
                valueOperatorArray.push("0" + value)
            }
            else {
                let text = value.toString()
                let convertedValue = value.toString()
                valueOperatorArray.push(convertedValue)
            }
        }
    }
    let currentNumber = valueOperatorArray.join('')
    document.getElementById('currentNumber').innerHTML = currentNumber
}

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

equalsSign.addEventListener("click", function () { myResult() })
// 3 + 2 + 1 + 2
// 5 + 1 + 2
// 6 + 2
// 8
function myResult() {
    let arrayLength = valueOperatorArray.length

    if (arrayLength != 0) {
        while (arrayLength != 1) {
            if (valueOperatorArray[1] === "+") {
                let result = Number(valueOperatorArray[0]) + Number(valueOperatorArray[2])
                valueOperatorArray[0] = result.toString()
                valueOperatorArray.splice(1, 2)
                valueOperatorArray.push()
                arrayLength = valueOperatorArray.length
                console.log(valueOperatorArray)
            }
        }
        document.getElementById('currentNumber').innerHTML = valueOperatorArray
    }
}



// equalsSign.addEventListener("click", function () {
//     if (firstValue != undefined, secondValue != undefined) {
//         if (operator === "+") {
//             result = Number(firstValue) + Number(secondValue)
//             document.getElementById('currentNumber').innerHTML = ""
//             document.getElementById('currentNumber').innerHTML = result
//         }
//         else if (operator === "-") {
//             result = Number(firstValue) - Number(secondValue)
//             document.getElementById('currentNumber').innerHTML = ""
//             document.getElementById('currentNumber').innerHTML = result
//         }
//         else if (operator === "*") {
//             result = Number(firstValue) * Number(secondValue)
//             document.getElementById('currentNumber').innerHTML = ""
//             document.getElementById('currentNumber').innerHTML = result
//         }
//         else if (operator === "/") {
//             result = Number(firstValue) / Number(secondValue)
//             document.getElementById('currentNumber').innerHTML = ""
//             document.getElementById('currentNumber').innerHTML = result
//         }
//     }
// })

clearSign.addEventListener("click", function () {
    document.getElementById('currentNumber').innerHTML = ""
    valueOperatorArray = []
})


