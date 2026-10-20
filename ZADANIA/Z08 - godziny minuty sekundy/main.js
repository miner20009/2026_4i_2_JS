const sekundy = document.querySelector('#sekundy')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let s = parseInt(sekundy.value)
    let g = Math.floor(s/3600)
    let m = Math.floor((s % 3600) / 60)
    let sek = Math.floor((s % 3600) % 60)

    wynik.innerHTML = `
    ${g}g${m}m${sek}s`
})