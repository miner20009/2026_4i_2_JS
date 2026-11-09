const x1 = document.querySelector('#x1')
const y1 = document.querySelector('#y1')
const x2 = document.querySelector('#x2')
const y2 = document.querySelector('#y2')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let a = parseFloat(x1.value)
    let b = parseFloat(y1.value)
    let c = parseFloat(x2.value)
    let d = parseFloat(y2.value)
    let odleglosc = Math.sqrt(
        (a - c) ** 2 + (b - d) ** 2
    )

    wynik.innerHTML = `
        Punkt A: (${a}, ${b})<br>
        Punkt B: (${c}, ${d})<br>
        Odległość między punktami: ${odleglosc.toFixed(2)}
    `
})