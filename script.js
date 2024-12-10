const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btn10 = document.getElementById('btn10')

const btn11 = document.getElementById('btn11')
const btn12 = document.getElementById('btn12')
const btn13 = document.getElementById('btn13')

const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')
const div4 = document.getElementById('div4')
const div5 = document.getElementById('div5')

const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')

const btns = div5.querySelectorAll('button')

const divPos = div3.getBoundingClientRect()
const btn2Pos = btn2.getBoundingClientRect()
const btn1Pos = btn1.getBoundingClientRect()

const pos = {
    'top': btn2Pos.top - divPos.top,
    'left': btn2Pos.left - divPos.left,
    'btn1Left': btn1Pos.left - divPos.left,
    'btn1top': btn1Pos.top - divPos.top
}

console.log(btn1.getBoundingClientRect().left)

const moveBtn = () => {
    const top = Math.floor(Math.random() * (pos.top - 30 - 80))
    const left = Math.floor(Math.random() * (pos.left - 80))

    btn1.style.position = 'absolute'
    btn2.style.position = 'absolute'

    btn1.style.left = pos.btn1Left + 'px'
    btn1.style.top = pos.btn1top + 'px'

    btn2.style.top = top + 'px'
    btn2.style.left = left + 'px'
} 

btn2.addEventListener('mousemove', () => {
    moveBtn()
    console.log(btn1.getBoundingClientRect().left)
})

btn2.addEventListener('touchstart', () => {
    moveBtn()
})

btn1.addEventListener('click', () => {
    div4.style.display = 'flex'
    div2.style.opacity = 0
    btn3.style.display = 'flex'

    btn1.style.display = 'none'
    btn2.style.display = 'none'
})

btn3.addEventListener('click', () => {
    if (btn3.textContent === 'Следующий вопрос') {
        div2.style.opacity = 1
        span1.textContent = 'Вопрос второй (на самом деле не вопрос 😃):'
        span2.textContent = 'Оцените работу разработчика по десятибалльной шкале'

        div4.style.display = 'none'
        btn3.style.display = 'none'

        div5.style.display = 'flex'
    } else if (btn3.textContent === 'Cледующий вопрос') {
        div4.textContent = 'А всё. Я занятой человек. У меня времени не дохуя, чтобы сидеть и придумывать вам вопросы'
        div4.style.fontSize = '24px'
        btn3.textContent = 'Разраб - ЛУЧШИЙ!!!'
    } else {
        div4.textContent = 'Вы тоже. Люблю всех 💗 (кроме Карины)'
        btn3.textContent = 'Хватит на меня нажимать!!!'
        btn3.style.width = '250px'
    }
})

btns.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (e.target === btn10) {
            div4.textContent = 'Верный ответ!!!'
            div4.style.display = 'flex'
            div5.style.display = 'none'

            btn3.style.display = 'flex'
            btn3.textContent = 'Cледующий вопрос'
        } else if (e.target === btn9) {
            div4.textContent = 'Близко, но нет!'
            div4.style.display = 'flex'
            div3.classList.add('didiv')
        } else if (e.target == btn11 | e.target == btn12 | e.target == btn13) {
            div4.textContent = 'Ахуел (а)?'

            e.target.style.opacity = 0
            div4.style.display = 'flex'
            div3.classList.add('didiv')
        } else if (e.target == btn4 | e.target == btn5 | e.target == btn6) {
            div4.textContent = 'Не угадал (а)'

            e.target.style.opacity = 0
            div4.style.display = 'flex'
            div3.classList.add('didiv')
        } else {
            div4.textContent = 'Почти верно'

            e.target.style.opacity = 0
            div4.style.display = 'flex'
            div3.classList.add('didiv')
        }
    })    
});

