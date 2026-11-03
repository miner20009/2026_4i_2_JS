const pole_A = document.querySelector('#A')
const pole_B = document.querySelector('#B')
const wynik = document.querySelector('.wynik')
const btn= document.querySelector('button')

btn.addEventListener('click', function () {
    let A = parseInt(pole_A.value)
    let B = parseInt(pole_B.value)
    let I = ''
    let Y = ''

    if (A<=0 && B<=0) {
        I = 1
        Y = 0
    } else if (A<=0 && B>=0) {
        I = 2
        Y = 1
    } else if (A>0 && B<=0) {
        I = 3
        Y = 2
    } else {
        I = 4
        Y = 3
    }wynik.innerHTML = `
    I = ${I}<br>
    Y = ${Y}<br>
    `

})