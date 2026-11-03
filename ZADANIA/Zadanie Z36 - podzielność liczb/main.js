const pole_a = document.querySelector('#a')
const pole_b = document.querySelector('#b')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let a = pole_a.value
    let b = pole_b.value

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = `Podane wartości lub wartość nie jest liczbą<br>`
    }    else if (parseInt(a) == a && parseInt(b) == b) {
        if ( a % b === 0) {
            wynik.innerHTML = `Liczba ${a} jest podzielna przez ${b}<br>`
        } else {
            wynik.innerHTML = `Liczba ${a} nie jest podzielna przez ${b}<br>`
        }
    } else {
        wynik.innerHTML = `Podana liczba lub liczby są rzeczywiste<br>`
    }
})