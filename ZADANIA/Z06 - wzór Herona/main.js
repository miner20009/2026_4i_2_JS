const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let bokA = parseFloat(a.value)
    let bokB = parseFloat(b.value)
    let bokC = parseFloat(c.value)

    let p = (bokA + bokB + bokC) / 2

    let pole = Math.sqrt(p * (p - bokA) * (p - bokB) * (p - bokC))

    wynik.innerHTML = `
        Bok a = ${bokA}<br>
        Bok b = ${bokB}<br>
        Bok c = ${bokC}<br>
        Półobwód = ${p}<br>
        Pole trójkąta = ${pole.toFixed(2)}
    `
})