const wartosc = document.querySelector('#wartosc')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let x = parseFloat(wartosc.value)
    x = parseInt(x)
    let tekst = `x = ${x}<br>`
    for (let i = 0; i <= 10; i++) {
        let wynikMnozenia = i * x
        tekst += `${i} x ${x} = ${wynikMnozenia}<br>`
    }
    wynik.innerHTML = tekst
})