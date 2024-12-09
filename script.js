


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

const btn9 = document.getElementById('btn9')
const btn10 = document.getElementById('btn10')

const div3 = document.getElementById('div3')
const div4 = document.getElementById('div4')
const div5 = document.getElementById('div5')

const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')

const btns = div5.querySelectorAll('button')

btn2.addEventListener('mousemove', () => {
    const top = Math.floor(Math.random()*672)
    const left = Math.floor(Math.random()*720)

    btn2.style.top = top + 'px'
    btn2.style.left = left + 'px'
})

btn1.addEventListener('click', () => {
    div4.style.display = 'flex'
    btn3.style.display = 'flex'

    btn1.style.display = 'none'
    btn2.style.display = 'none'
})

btn3.addEventListener('click', () => {
    span1.textContent = 'Вопрос второй:'
    span2.textContent = 'Насколько по десятибалльной шкале неотразим Узайри?'

    div4.style.display = 'none'
    btn3.style.display = 'none'

    div5.style.display = 'flex'
})
console.log(btns)
btns.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (e.target == btn9) {
            div4.textContent = 'Близко, но нет!'
            div4.style.display = 'flex'
            div3.classList.add('didiv')
        } if (e.target == btn10) {
            div4.textContent = 'Правильно!!!'
            div4.style.display = 'flex'
            div5.style.display = 'none'
        } else {
            e.target.style.opacity = 0
        }
    })
});

