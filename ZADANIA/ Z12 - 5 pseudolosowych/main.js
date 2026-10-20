const min = document.querySelector('#min')
const max = document.querySelector('#max')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let minWartosc = parseInt(min.value)
    let maxWartosc = parseInt(max.value)

    if (!Number.isInteger(minWartosc) || !Number.isInteger(maxWartosc)) {
        wynik.textContent = 'Podaj liczby całkowite!'
        return
    }

    if (minWartosc <= 0) {
        wynik.textContent = 'Min musi być większe od 0!'
        return
    }

    if (minWartosc >= maxWartosc) {
        wynik.textContent = 'Min musi być mniejsze od max!'
        return
    }

    let p1 = Math.floor(Math.random() * (maxWartosc - minWartosc + 1)) + minWartosc
    let p2 = Math.floor(Math.random() * (maxWartosc - minWartosc + 1)) + minWartosc
    let p3 = Math.floor(Math.random() * (maxWartosc - minWartosc + 1)) + minWartosc
    let p4 = Math.floor(Math.random() * (maxWartosc - minWartosc + 1)) + minWartosc
    let p5 = Math.floor(Math.random() * (maxWartosc - minWartosc + 1)) + minWartosc

    let sumaWynik = p1 + p2 + p3 + p4 + p5
    let iloczynWynik = p1 * p2 * p3 * p4 * p5
    let sredniaWynik = sumaWynik / 5

    wynik.innerHTML = `
       
        ${p1}-Wartość p1<br>${p2}-Wartość p2<br>${p3}-Wartość p3<br>${p4}-Wartość p4<br>${p5}-Wartość p5<br>${sumaWynik}-Wynik sumy<br>${iloczynWynik}-Wynik iloczynu<br>${sredniaWynik}-Średnia `
    })