const pole_rok = document.querySelector('#rok')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let rok = pole_rok.value

    if (isNaN(rok)) {
        wynik.innerHTML = 'Podana wartość nie jest liczbą'
    } else if (rok % 400 == 0 || (rok % 4 == 0 && rok % 100 != 0)) {
        wynik.innerHTML = 'Rok jest przestępny'
    } else {
        wynik.innerHTML = 'Rok nie jest przestępny'
    }
})