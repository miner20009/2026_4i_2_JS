const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let liczba_a = parseFloat(a.value)
    let liczba_b = parseFloat(b.value)
    let liczba_c = parseFloat(c.value)
    let liczba_d = parseFloat(d.value)

    let srednia_geometryczna = Math.pow((liczba_a * liczba_b * liczba_c * liczba_d),0.25)

    wynik.innerHTML =
        `
        a = ${liczba_a}<br>
        b = ${liczba_b}<br>
        c = ${liczba_c}<br>
        d = ${liczba_d}<br>
        Średnia geometryczna = ${srednia_geometryczna}<br>
        Średnia geometryczna zaokrąglona = ${srednia_geometryczna.toFixed(3)}<br>
        `
})