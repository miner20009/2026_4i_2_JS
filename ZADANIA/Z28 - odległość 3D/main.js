const x1 = document.querySelector('#x1');
const y1 = document.querySelector('#y1');
const z1 = document.querySelector('#z1');
const x2 = document.querySelector('#x2');
const y2 = document.querySelector('#y2');
const z2 = document.querySelector('#z2');
const wynik = document.querySelector('.wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseFloat(x1.value);
    let b = parseFloat(y1.value);
    let c = parseFloat(z1.value);

    let d = parseFloat(x2.value);
    let e = parseFloat(y2.value);
    let f = parseFloat(z2.value);

    let odleglosc = Math.sqrt(
        (a - d) ** 2 + (b - e) ** 2 + (c - f) ** 2
    )

    wynik.innerHTML = `
        <h2>Wynik</h2>
        x1: ${a}<br>
        y1: ${b}<br>
        z1: ${c}<br>
        x2: ${d}<br>
        y2: ${e}<br>
        z2: ${f}<br>
        Odległość między punktami: ${odleglosc.toFixed(2)}
    `
})