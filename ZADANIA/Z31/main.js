const pole_x1 = document.querySelector('#x1')
const pole_y1 = document.querySelector('#y1')
const pole_x2 = document.querySelector('#x2')
const pole_y2 = document.querySelector('#y2')
const pole_x3 = document.querySelector('#x3')
const pole_y3 = document.querySelector('#y3')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
  let x1 = parseFloat(pole_x1.value)
  let y1 = parseFloat(pole_y1.value)
  let x2 = parseFloat(pole_x2.value)
  let y2 = parseFloat(pole_y2.value)
  let x3 = parseFloat(pole_x3.value)
  let y3 = parseFloat(pole_y3.value)

  let pole = Math.abs(0.5 * ((x1 * y1 - x2 * y2) + (x2 * y3 - x3 * y2) + (x3 * y1 - x1 * y3)))
  if(pole == 0) {
    wynik.innerHTML = `
    Podano nieprawidłowe dane !!!
    `
  }
  else
  {
    wynik.innerHTML = `
    x1 = ${x1}<br>
    y1 = ${y1}<br>
    x2 = ${x2}<br>
    y2 = ${y2}<br>
    x3 = ${x3}<br>
    y3 = ${y3}<br>
    pole = ${pole}<br>
    `
  }
})