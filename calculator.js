
let addition = document.getElementById('add')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    if (b !== 0) {
        return a / b
    } else {
        return 'Cannot be divided by 0'
    }
}

addition.addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('number1').value) || 0
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = document.getElementById('calculation-result')
    result.textContent = add(num1, num2)
})

subtract.addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('number1').value) || 0
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = document.getElementById('calculation-result')
    result.textContent = sub(num1, num2)
})

multiply.addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('number1').value) || 0
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = document.getElementById('calculation-result')
    result.textContent = mul(num1, num2)
})

divide.addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('number1').value) || 0
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = document.getElementById('calculation-result')
    result.textContent = div(num1, num2)
})