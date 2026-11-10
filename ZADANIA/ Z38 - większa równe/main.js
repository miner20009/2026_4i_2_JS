const pole_a = document.querySelector('#a')
const pole_b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let a = pole_a.value
    let b = pole_b.value
    let wynik_text =''

    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        wynik_text = 'podana wartość lub wartości nie są liczbami'
    } else if (parseInt(a) == a && parseInt(b) == b) {
        a = parseInt(a)
        b = parseInt(b)
        if (a === b) {
            wynik_text = 'a == b'
        } else if (a>b) {
            wynik_text = 'a > b'
        } else {
            wynik_text = 'a < b'
        }
    } else {
        wynik_text = 'Podane liczby nie są całkowite'
    }

    wynik.innerHTML = wynik_text
})