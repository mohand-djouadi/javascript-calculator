function pressNumber(number) {
    if (express.value[express.value.length-1] === ")") {
        express.value += "*"+number
    } else {
        express.value += number
    }
}
function addExpressOperator(operator) {
    if (express.value[express.value.length-1] !== "." && (express.value !== "" || operatSymboles.includes(express.value[express.value.length-1]))) {
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
    let nbCloseExp = 0
    for (let i=0; i<express.value.length; i++) {
        if (express.value[i] === "("){
            nbOpenExp++
        } else if (express.value[i] === ")") {
            nbCloseExp++
        }
    }
    if (express.value === "") {
        express.value += "("
    } else {
        if (nbOpenExp === 0) {
            if (operatSymboles.includes(express.value[express.value.length-1])) {
                express.value += "("
            } else if (!isNaN(express.value[express.value.length-1])){
                express.value += "*("
            }
        } else {
            if (operatSymboles.includes(express.value[express.value.length-1])) {
                express.value += "("
            } else {
                if (!isNaN(express.value[express.value.length-1])) {
                    express.value += ")"
                } else if (express.value[express.value.length-1] === ")") {
                    if (nbOpenExp === nbCloseExp) {
                        express.value += "*("
                    } else {
                        express.value += ")"
                    }
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
    let nbopExp = 0
    let nbclExp = 0 
    for (let i=0; i<expression.length; i++) {
        if (expression[i] === "(") {
            nbopExp++
        } else if (expression[i] === ")") {
            nbclExp++
        }
    }
    if (nbopExp !== nbclExp) {
        throw new Error("manque une parenthese")
    }
    if (expression[0] !== "(" && isNaN(expression[0])) {
        throw new Error("expression doit commencer par un chiffre ou (")
    }
    if (expression[expression.length-1] !== ")" && isNaN(expression[expression.length-1])) {
        throw new Error("expression doit terminer par un chiffre ou )")
    } 
}
function afficheMessageErreur(message) {
    erreur.textContent = message
}
