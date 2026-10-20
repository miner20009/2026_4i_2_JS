const c = document.querySelector('#c')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (e){
    let celciusze = parseFloat(c.value)
    let kelwiny = celciusze + 273.15
    let fahrenheit = celciusze * 1.8 + 32

    wynik.innerHTML = `
    Stopnie Celciusza = ${celciusze}<br>
Stopnie Kelwina = ${kelwiny}<br>
Stopnie Fahrenheita = ${fahrenheit}<br>
`
})