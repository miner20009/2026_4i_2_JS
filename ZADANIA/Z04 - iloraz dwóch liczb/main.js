const a = document.querySelector('#a')
const b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let a_liczba = parseFloat(a.value)
    let b_liczba = parseFloat(b.value)

    let iloraz = a_liczba/ b_liczba

    wynik.innerHTML = `
    a = ${a_liczba}<br>
    b = ${b_liczba}<br>
    iloraz = ${iloraz}<br>
    iloraz liczb = ${iloraz.toFixed(2)}<br>
    
    `
})