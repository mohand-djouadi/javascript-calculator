function pressNumber(number) {
    if (express.value[express.value.length-1] === ")") {
        express.value += "*"+number
    } else {
        express.value += number
    }
}
function addExpressOperator(operator) {
    if (express.value !== "" && !isNaN(express.value[express.value.length-1])) {
        express.value += operator
    }
}
function addNegative() {
    if (express.value === "" || operatSymboles.includes(express.value[express.value.length-1])) {
        express.value += "(-"
    }
}
function addFloat() {
    if (express.value === "" || operatSymboles.includes(express.value[express.value.length-1])) {
        express.value += "0."
    } else if (!isNaN(express.value[express.value.length-1])) {
        express.value += "."
    }
}
function openSubExpression() {
    if (!isNaN(express.value[express.value.length-1])) {
        express.value += "*("
    } else {
        express.value += "("
    }
}
function closeSubExpression() {
    if (!isNaN(express.value[express.value.length-1])) {
        express.value += ")"
    }
}
function resetExpression() {
    express.value = ""
}
function deleteChar() {
    express.value = express.value.slice(0,-1)
}
function validatExpression(expression) {
    let regex = new RegExp('/^([0-9]+(\.[0-9]=)?|[()]|[-+*/])*$')
    return regex.test(expression)
}
