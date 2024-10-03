function checkAnswer() {
    const correctAnswer = '4'
    let input = document.querySelector('[name=quiz]:checked')
    let userAnswer = input.value
    let result = document.querySelector('#feedback')

    if (userAnswer === correctAnswer) {
        result.textContent = "Correct! Well done."
    } else {
        result.textContent = "That's incorrect. Try again!"
    }
}

let submitButton = document.querySelector('#submit-answer')

submitButton.addEventListener('click', (
    checkAnswer
))