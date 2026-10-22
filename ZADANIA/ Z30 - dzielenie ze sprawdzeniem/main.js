const pole_a = document.querySelector('#a')
const pole_b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click',  function(){
    let a = parseInt(pole_a.value)
    let b = parseInt(pole_b.value)

    if(b == 0) {
        wynik.innerHTML = `Nie można dzielić przez 0`
    }
    else
    {
        let iloraz = a / b
        wynik.innerHTML = `
        a = ${a}<br>
        b = ${b}<br>
        iloraz = ${iloraz}<br>
        `
    }
})
