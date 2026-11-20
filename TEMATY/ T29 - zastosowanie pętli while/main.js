const pole_n = document.querySelector('#n')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    let n = parseInt(pole_n.value)
    wynik.innerHTML = ""
    if (isNaN(n) || n <= 0) {
        wynik.innerHTML = "Proszę podać dodatnią liczbę całkowitą."
    } else {
        let i = 1
        let suma = 0
        while (i <= n) {
            suma += i
            wynik.innerHTML += "Suma liczb od 1 do " + i + " wynosi: " + suma + "<br>"
            i++
        }
    }
})