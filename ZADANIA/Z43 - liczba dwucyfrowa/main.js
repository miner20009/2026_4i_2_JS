const pole_a = document.querySelector('#a')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

let a = pole_a.value

    if (isNaN(a)) {
        wynik.innerHTML = 'Podana wartość nie jest liczbą'
    } else if (a >= 10 && a < 100) {
        wynik.innerHTML = 'Podana liczba jest dwucyfrowa'
    } else {
        wynik.innerHTML = 'Podana liczba nie jest dwucyfrowa'
    } if (a % 2 !=0) {
        wynik.innerHTML = 'Podana liczba nie jest parzysta'
    }
})