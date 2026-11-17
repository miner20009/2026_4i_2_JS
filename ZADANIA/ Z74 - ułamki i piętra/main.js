const pole_n = document.querySelector('#n')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let n = parseInt(pole_n.value)
    wynik.innerHTML = ''

    if (isNaN(n) || n <= 0 || pole_n.value.trim() === '') {
        wynik.innerHTML = 'Podaj dodatnią liczbę całkowitą!'
    } else {
        for (let i = 1; i <= n; i++) {
            wynik.innerHTML += 'Piętro ' + i + ' '
            for (let j = 1; j <= i; j++) {
                wynik.innerHTML += '>'
            }
            wynik.innerHTML += ' 1/' + i + ' - ' + (1 / i).toFixed(6) + '<br>'
        }
        wynik.innerHTML += '> > > > Koniec wspinaczki wracamy < < < < <br>'
        for (let i = n; i >= 1; i--) {
            wynik.innerHTML += 'Piętro ' + i + ' '
            for (let j = 1; j <= i; j++) {
                wynik.innerHTML += '>'
            }
            wynik.innerHTML += '<br>'
        }
    }
})