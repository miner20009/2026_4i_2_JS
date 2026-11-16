const pole_a = document.querySelector('#a')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('clik', function (){
   let a = pole_a.value
   let wynik_text = ''

    if (isNaN(a) || a <= 0) {
        wynik.innerHTML = 'Proszę podać dodatnią liczbę całkowitą.'
    } else {
        for (let i = 1; i <= a; i++) {
            wynik_text += `kwadrat liczby.... ${i}..... to ${i**2}<br>`
        }
        wynik.innerHTML = wynik_text
    }
})