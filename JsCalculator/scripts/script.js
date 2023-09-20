function pressNumber(number) {
    if (express.value[express.value.length-1] === ")") {
        express.value += "*"+number
    } else {
        express.value += number
    }
}
function addExpressOperator(operator) {
    if (express.value !== "" || operatSymboles.includes(express.value[express.value.length-1])) {
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
function addSubExpression() {
    let nbOpenExp = 0
    for (let i=0; i<express.value.length; i++) {
        if (express.value[i] === '('){
            nbOpenExp++
        }
    }
    if (express.value === "") {
        express.value += "("
    } else {
        if (nbOpenExp === 0) {
            if (operatSymboles.includes(express.value[express.value.length-1])) {
                express.value += "("
            } else {
                express.value += "*("
            }
        } else {
            if (operatSymboles.includes(express.value[express.value.length-1])) {
                express.value += "("
            } else {
                if (!isNaN(express.value[express.value.length-1])) {
                    express.value += ")"
                } else if (express.value[express.value.length-1] === ")") {
                    express.value += "*("
                }
            }
        }
    }
}
function resetExpression() {
    express.value = ""
}
function deleteChar() {
    express.value = express.value.slice(0,-1)
}
function validatExpression(expression) {
    return regex.test(expression)
}
