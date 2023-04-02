const calculatorEl = document.querySelector('.calculator_option')
const pushBlkEl = document.querySelector('.for_calculator_and_counter')
calculatorEl.addEventListener('click', handleCalculator)



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
    input_number.setAttribute('type', 'number')
    input_number.classList.add('input_number')
    input_border.appendChild(input_number)

    const show_operator = document.createElement('span')
    show_operator.classList.add('show_operator')
    input_border.appendChild(show_operator)

    const input_number1 = document.createElement('input')
    input_number1.setAttribute('type', 'number')
    input_number1.classList.add('input_number1')
    input_border.appendChild(input_number1)

    const result = document.createElement('span')
    result.classList.add('result')
    output_part.appendChild(result)

    const btn_container = document.createElement('div')
    btn_container.classList.add('btn_container')
    calculator_article.appendChild(btn_container)

    // for textContent of Result


    const plusbtn = document.createElement('button')
    plusbtn.textContent = '+'

    btn_container.appendChild(plusbtn)

    plusbtn.addEventListener('click', function add() {

        show_operator.innerText = '+'
        const total = Number(input_number.value) + Number(input_number1.value)
        result.textContent = total
    })

    const subtractbtn = document.createElement('button')
    subtractbtn.textContent = '-'

    btn_container.appendChild(subtractbtn)

    subtractbtn.addEventListener('click', function subtract() {

        show_operator.innerText = '-'
        const total = Number(input_number.value) - Number(input_number1.value)
        result.textContent = total
    })

    const btn_container2 = document.createElement('div')
    btn_container2.classList.add('btn_container')
    calculator_article.appendChild(btn_container2)
    
    const manipulatebtn = document.createElement('button')
    manipulatebtn.textContent = 'x'

    btn_container2.appendChild(manipulatebtn)

    manipulatebtn.addEventListener('click', function manipulate() {

        show_operator.innerText = 'x'
        const total = Number(input_number.value) * Number(input_number1.value)
        result.textContent = total
    })

    const dividebtn = document.createElement('button')
    dividebtn.textContent = 'divide'

    btn_container2.appendChild(dividebtn)

    dividebtn.addEventListener('click', function divide() {

        show_operator.innerText = 'divide'
        const total = Number(input_number.value) / Number(input_number1.value)
        result.textContent = total
    })


}