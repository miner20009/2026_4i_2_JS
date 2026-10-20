const a = document.querySelector('#a')
const b = document.querySelector('#b')
const h = document.querySelector('#h')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let liczbaA = parseFloat(a.value)
    let liczbaB = parseFloat(b.value)
    let liczbaH = parseFloat(h.value)

    let pole = (liczbaA + liczbaB) / 2 * liczbaH

    wynik.innerHTML = `
    a = ${liczbaA}<br>
    b = ${liczbaB}<br>
    h = ${liczbaH}<br>
    Pole trapezu = ${pole.toFixed(2)}
    `
})