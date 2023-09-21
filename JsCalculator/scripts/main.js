result.addEventListener('click', () => {
    erreur.textContent = ""
    try {
        validatExpression(express.value)
        express.value = eval(express.value)
    } catch (error) {
        afficheMessageErreur(error.message)
    }
    if (erreur.textContent !== "") {
        erreur.classList.add('active')
    } else {
        erreur.classList.remove('active')
    }
})