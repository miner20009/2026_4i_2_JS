const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let a_liczba = parseFloat(a.value)
    let b_liczba = parseFloat(b.value)
    let c_liczba = parseFloat(c.value)
    let d_liczba = parseFloat(d.value)

    let suma = a_liczba+ b_liczba+ c_liczba+ d_liczba
    let srednia = suma / 4

    wynik.innerHTML = `
    a = ${a_liczba}<br>
    b = ${b_liczba}<br>
    c = ${c_liczba}<br>
    d = ${d_liczba}<br>
    suma = ${suma}<br>
    średnia = ${srednia}<br>
    średnia zaokrąglona = ${srednia.toFixed(3)}<br>
    
    `
})