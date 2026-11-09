const promien = document.querySelector('#promien');
const wynik = document.querySelector('.wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let r = parseFloat(promien.value);
    let pole = 4 * Math.PI * r * r;
    let objetosc = (4 / 3) * Math.PI * r * r * r;

    wynik.innerHTML = `
        Promień kuli = ${r}<br>
        Pole powierzchni kuli = ${pole.toFixed(2)}<br>
        Objętość kuli = ${objetosc.toFixed(2)}
    `;
});