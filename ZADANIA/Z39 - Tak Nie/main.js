const pole_znak = document.querySelector('#znak')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let znak = pole_znak.value
    let wynik_text = ''

    if (znak == 'T' || znak =='t') {
        wynik_text = 'TAK'
    } else {
        if (znak == 'N' || znak == 'n') {
            wynik_text = 'NIE'
        }
    }

    wynik.innerHTML = wynik_text
})