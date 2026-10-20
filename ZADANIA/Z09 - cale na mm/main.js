const cale = document.querySelector('#cale')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let c = parseInt(cale.value)
    let m = c * 25.3995

    wynik.innerHTML = `
    ${c}c-Długość w calach<br>${m}mm-Długość w milimetrach`
})