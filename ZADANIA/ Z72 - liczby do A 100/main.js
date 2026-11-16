const pole_a = document.querySelector('#a')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function () {

    let a = parseInt(pole_a.value);

    if (isNaN(a) || a <= 0) {
        wynik.innerHTML = 'Podaj dodatnią liczbę całkowitą.'
    } else {
        if (a >= 100) {
            a = 100;
        }
        wynik.innerHTML = '';
        for (let i = 1; i <= a; i++) {
            wynik.innerHTML += i;

            if (i < a) {
                wynik.innerHTML += ';';
            }
        }
    }
})
