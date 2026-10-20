const liczba = document.querySelector('#liczba')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let l = parseInt(liczba.value)

    let kwadrat = l * l
    let szescian = l * l * l

    wynik.innerHTML = `
    ${l} - Podana liczba<br>
    ${kwadrat} - Kwadrat<br>
    ${szescian} - Sześcian
    `
})