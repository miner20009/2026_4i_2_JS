let pole_a = document.querySelector('#a')
let pole_b = document.querySelector('#b')
let wynik = document.querySelector('.wynik')
let btn= document.querySelector('button')

btn.addEventListener('click',function (){
    let a = pole_a.value
    let b = pole_b.value

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = 'Podana wartość lub wartości nie są liczbami'
    } else if (a % 2 != 0 || b % 2 != 0) {
        wynik.innerHTML = 'Podana liczba lub liczby są nieparzyste'
    } else if (a == b) {
        wynik.innerHTML = 'Liczby są równe'
    } else if (a > b) {
        wynik.innerHTML = 'Wieksza liczba to:' + a
    } else {
        wynik.innerHTML = 'Większa liczba to:' + b
    }




})