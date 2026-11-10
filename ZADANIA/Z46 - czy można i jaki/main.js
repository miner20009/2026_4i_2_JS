const pole_a = document.querySelector('#a')
const pole_b = document.querySelector('#b')
const pole_c = document.querySelector('#c')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let a = pole_a.value
    let b = pole_b.value
    let c = pole_c.value
    let wynik_tekst = ''

    if (a + b <= c || a + c <=b || b + c <=a) {
        wynik_tekst = 'Nie można zbudować takiego trójkąta'
    } else if (a === b && b === c) {
        wynik_tekst = 'Trójkąt jest równoboczny'
    } else if (a === b || a ===c || c ===b) {
        wynik_tekst = 'Trójkąt jest równoramienny'
    } else if ( a**2 + b**2 === c**2 || b**2 + c**2 === a**2 || c**2 + a**2 === b**2) {
        wynik_tekst = 'Trójkąt jest prostokątny'
    } else {
        wynik_tekst = 'Trójkąt dowolny'
    }
    document.writeln(wynik_tekst)
})