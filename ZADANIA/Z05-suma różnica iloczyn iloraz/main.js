const a = document.querySelector('#a')
const b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')


btn.addEventListener('click', function(){
    let liczba_a = parseInt(a.value)
    let liczba_b = parseInt(b.value)
    let suma = liczba_a + liczba_b
    let roznica = liczba_a - liczba_b
    let iloczyn = liczba_a * liczba_b
    let iloraz = liczba_a / liczba_b
    let iloraz_calkowity = Math.floor(liczba_a / liczba_b)
    let reszta = liczba_a % liczba_b
    let potega = liczba_a ** liczba_b

    wynik.innerHTML = `
    a = ${liczba_a}<br>
    b = ${liczba_b}<br>
    suma = ${suma}<br>
    różnica = ${roznica}<br>
    iloczyn = ${iloczyn}<br>
    iloraz = ${iloraz}<br>
    iloraz_calkowity = ${iloraz_calkowity}<br>
    reszta = ${reszta}<br>
    potęga = ${potega}<br>
    `
})