const pole_a = document.querySelector('#a')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseInt(pole_a.value)
    for (let i = 2; i <= a; i += 2) {
            wynik.innerHTML += i
                if (i + 2 <= a) {
                wynik.innerHTML += ';'
            }
    }
})
