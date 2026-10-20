const stopnie = document.querySelector('#stopnie')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let s = parseInt(stopnie.value)
    let r = s * Math.PI / 180;

    wynik.innerHTML = `
    ${s}-Ilość stopnii<br>${r}-Ilość radianów`
})