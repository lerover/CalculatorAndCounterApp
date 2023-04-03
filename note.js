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

const counter_option = document.querySelector('.counter_option')

counter_option.addEventListener('click', function () {
    const coffee_form = document.createElement('div')
    coffee_form.classList.add('coffee_form')
    pushBlkEl.appendChild(coffee_form)

    const greeting = document.createElement('h1')
    greeting.classList.add('greeting')
    coffee_form.appendChild(greeting)
    greeting.textContent = 'Coffee Count'

    const count = document.createElement('p')
    count.classList.add('count')
    count.textContent = 0
    coffee_form.appendChild(count)

    const width_of_card = document.createElement('p')
    width_of_card.classList.add('width_of_card')
    coffee_form.appendChild(width_of_card)

    const button1 = document.createElement('button')
    button1.classList.add('increase')
    width_of_card.appendChild(button1)
    button1.textContent = '+'

    const button2 = document.createElement('button')
    button2.classList.add('decrease')
    width_of_card.appendChild(button2)
    button2.textContent = '-'

    const button3 = document.createElement('button')
    button3.classList.add('decrease', 'font_size_Reset')
    width_of_card.appendChild(button3)
    button3.textContent = 'Reset'

    let counter = 0
    button1.addEventListener('click', function () {
        counter = counter + 1
        count.textContent = counter

    })

    button2.addEventListener('click', function () {
        counter = counter - 1
        if (counter < 0) {
            counter = 0
        }
        count.textContent = counter

    })

    button3.addEventListener('click', function () {
        counter = 0
        count.textContent = counter

    })

    const save_btn_container = document.createElement('div')
    save_btn_container.classList.add('width_of_card', 'new_style')
    coffee_form.appendChild(save_btn_container)

    const save_button = document.createElement('button')
    save_button.classList.add('button')
    save_btn_container.appendChild(save_button)
    save_button.textContent='Save'

    let save = []
    save_button.addEventListener('click', function () {
        save.push(counter)
        console.log(save)
    })

    const greet_button = document.createElement('button')
    greet_button.classList.add('button')
    greet_button.textContent='Greet'
    save_btn_container.appendChild(greet_button)
    greet_button.addEventListener('click',function () {
        greeting.textContent= `Hello Sir!! 
        Nice to meet you!! 
        What would you like to order?`
    })

    const reset_greet_button = document.createElement('button')
    reset_greet_button.classList.add('button')
    reset_greet_button.textContent='Again'
    save_btn_container.appendChild(reset_greet_button)
    reset_greet_button.addEventListener('click', function() {
        greeting.textContent= 'Coffee Count'
    })

})