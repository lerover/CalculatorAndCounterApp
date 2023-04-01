const calculatorEl = document.querySelector('.calculator_option')
const pushBlkEl = document.querySelector('.for_calculator_and_counter')
calculatorEl.addEventListener('click',handleCalculator)



function handleCalculator() {
    const calculator_article = document.createElement('article')
    pushBlkEl.appendChild(calculator_article)
    calculator_article.classList.add('card')

    const output_part = document.createElement('div')
    calculator_article.appendChild(output_part)
    output_part.classList.add('output_part')

    const input_border = document.createElement('div')
    output_part.appendChild(input_border)
    input_border.classList.add('input_border')

    const input_number = document.createElement('input')
    input_number.setAttribute('type','number')
    input_number.classList.add('input_number')
    input_border.appendChild(input_number)

    const show_operator = document.createElement('span')
    show_operator.classList.add('show_operator')
    input_border.appendChild(show_operator)

    const input_number1 = document.createElement('input')
    input_number1.setAttribute('type','number')
    input_number1.classList.add('input_number1')
    input_border.appendChild(input_number1)

    const result = document.createElement('span')
    result.classList.add('result')
    output_part.appendChild(result)

    const btn_container = document.createElement('div')
    btn_container.classList.add('btn_container')
    calculator_article.appendChild(btn_container)

    document.createElement('button')
}