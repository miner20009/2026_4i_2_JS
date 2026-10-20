const wartosc = document.querySelector('#wartosc')
const procent = document.querySelector('#procent')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let w = parseInt(wartosc.value)
    let p = parseInt(procent.value)

    let wynikProcentu = w * p / 100

    wynik.innerHTML = `
    ${w}-Podana wartość<br>${wynikProcentu}-Wynik`
})
