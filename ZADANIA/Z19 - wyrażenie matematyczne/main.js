const x = document.querySelector('#x')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let liczba = parseFloat(x.value)
    let wynikWyrazenia = (liczba * liczba) / ((1 + Math.abs(liczba)) * (1 + Math.abs(liczba)))

    wynik.innerHTML = `
    ${liczba}-Podana wartość x<br>${wynikWyrazenia}-Wynik`
})