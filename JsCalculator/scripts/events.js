for (let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener('click', () => {
        pressNumber(numbers[i].textContent)
    })
}
document.addEventListener('keypress', (event) => {
    if (!isNaN(event.key)) {
        pressNumber(event.key)
    } 
})
for (let i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', () => {
        addExpressOperator(operators[i].textContent)
    })
}
document.addEventListener('keypress', (event) => {
    if (operatSymboles.includes(event.key)) {
        addExpressOperator(event.key)
    }
})
negative.addEventListener('click', () => {
    addNegative()
})  
float.addEventListener('click', () => {
    addFloat()
})
sup.addEventListener('click', () => {
    deleteChar()
})
reset.addEventListener('click', () => {
    resetExpression()
})
openSub.addEventListener('click', () => {
    openSubExpression()
})
closeSub.addEventListener('click', () => {
    closeSubExpression()
})
result.addEventListener('click', () => {
    validatExpression(express.value)
})