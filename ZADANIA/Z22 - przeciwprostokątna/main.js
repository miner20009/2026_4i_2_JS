const a = document.querySelector('#a')
const b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let A = parseFloat(a.value)
    let B = parseFloat(b.value)

    let C = Math.sqrt(A * A + B * B)

    wynik.innerHTML = `
    ${A}-Przyprostokątna A<br>
    ${B}-Przyprostokątna B<br>
    ${C}-Przeciwprostokątna C`
})