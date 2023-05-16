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

const currentNumberP = document.getElementById('currentNumber')
const resultDiv = document.getElementById('result')

function showSnackbar(snackbarText) {
    document.querySelector('#snackbar').className = "show"
    document.querySelector('h5').innerHTML = snackbarText
    setTimeout(function () {
        document.querySelector('#snackbar').className = "hide"
    }, 3000)

}

let valueOperatorArray = []
function myValueAndOperator(value) {
    const currentNumberWidthP = currentNumberP.offsetWidth
    const resultDivWidth = resultDiv.clientWidth
    if (currentNumberWidthP < resultDivWidth) {
        if (typeof value === "string" && value != ".") {
            if (isNaN(valueOperatorArray[0])) {
                valueOperatorArray[0] = "0"
                valueOperatorArray[1] = value
            }
            if (isNaN(valueOperatorArray[valueOperatorArray.length - 1])) {
                valueOperatorArray.splice(valueOperatorArray.length - 1, 1, value)
                valueOperatorArray.splice(valueOperatorArray.length - 1, 1,)
            }
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
                    if (valueOperatorArray[valueOperatorArray.length - 1] === "0") {
                        valueOperatorArray[valueOperatorArray.length - 1] = value
                    }
                    else {
                        let convertedValue = value.toString()
                        let lastValueInArray = valueOperatorArray[valueOperatorArray.length - 1] + value.toString()
                        valueOperatorArray[valueOperatorArray.length - 1] = lastValueInArray
                    }
                }
            }
            else if (valueOperatorArray.length != 0 && value === 0 && valueOperatorArray[valueOperatorArray.length - 1].includes("/")) {
                showSnackbar("Nie można dzielić przez 0!")
                return
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
    } else {
        showSnackbar("Wykorzystano maksymalną liczbę znaków. <br> Proszę wyczyścić kalkulator klikając przycisk C.")
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

buttonNumberZero.addEventListener("click", function () { myValueAndOperator(0) })

buttonDot.addEventListener("click", function () { myValueAndOperator(".") })

additionSign.addEventListener("click", function () { myValueAndOperator("+") })
subtractionSign.addEventListener("click", function () { myValueAndOperator("-") })
multiplicationSign.addEventListener("click", function () { myValueAndOperator("*") })
divisionSign.addEventListener("click", function () { myValueAndOperator("/") })

equalsSign.addEventListener("click", function () { myResult() })

function myResult() {
    let arrayLength = valueOperatorArray.length
    if (arrayLength != 0) {
        while (arrayLength != 1) {
            if (isNaN(valueOperatorArray[valueOperatorArray.length - 1])) {
                let result = Number(valueOperatorArray[valueOperatorArray.length - 2])
                let convertedToString = result.toString()
                valueOperatorArray.splice((valueOperatorArray.length - 1), 1)
            }
            if (valueOperatorArray.includes("/")) {
                let result = Number(valueOperatorArray[valueOperatorArray.indexOf("/") - 1]) / Number(valueOperatorArray[valueOperatorArray.indexOf("/") + 1])
                let convertedToString = result.toString()
                valueOperatorArray.splice((valueOperatorArray.indexOf("/") - 1), 3, convertedToString)

            }
            else if (valueOperatorArray.includes("*")) {
                let result = Number(valueOperatorArray[valueOperatorArray.indexOf("*") - 1]) * Number(valueOperatorArray[valueOperatorArray.indexOf("*") + 1])
                let convertedToString = result.toString()
                valueOperatorArray.splice((valueOperatorArray.indexOf("*") - 1), 3, convertedToString)
            }
            else if (valueOperatorArray[1] === "+") {
                let result = Number(valueOperatorArray[0]) + Number(valueOperatorArray[2])
                valueOperatorArray[0] = result.toString()
                valueOperatorArray.splice(1, 2)
            }
            else if (valueOperatorArray[1] === "-") {
                let result = Number(valueOperatorArray[0]) - Number(valueOperatorArray[2])
                valueOperatorArray[0] = result.toString()
                valueOperatorArray.splice(1, 2)
            }
            arrayLength = valueOperatorArray.length
        }
        document.getElementById('currentNumber').innerHTML = valueOperatorArray
    }
}

clearSign.addEventListener("click", function () {
    document.getElementById('currentNumber').innerHTML = ""
    valueOperatorArray = []
})


