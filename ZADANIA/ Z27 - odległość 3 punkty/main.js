const x1 = document.querySelector('#x1')
const y1 = document.querySelector('#y1')
const x2 = document.querySelector('#x2')
const y2 = document.querySelector('#y2')
const x3 = document.querySelector('#x3')
const y3 = document.querySelector('#y3')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(x1.value)
    let b = parseFloat(y1.value)
    let c = parseFloat(x2.value)
    let d = parseFloat(y2.value)
    let e = parseFloat(x3.value)
    let f = parseFloat(y3.value)

    let d12 = Math.sqrt((a - c) ** 2 + (b - d) ** 2)
    let d13 = Math.sqrt((a - e) ** 2 + (b - f) ** 2)
    let d23 = Math.sqrt((c - e) ** 2 + (d - f) ** 2)

    wynik.innerHTML = `
        <h3>Wyniki:</h3>
        P1 = (${a}, ${b})<br>
        P2 = (${c}, ${d})<br>
        P3 = (${e}, ${f})<br><br>

        Odległość P1-P2 = ${d12.toFixed(2)}<br>
        Odległość P1-P3 = ${d13.toFixed(2)}<br>
        Odległość P2-P3 = ${d23.toFixed(2)}
    `
})