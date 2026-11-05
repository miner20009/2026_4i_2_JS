const pole_zupa = document.querySelector('#zupa')
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let zupa = pole_zupa.value
    zupa_male = zupa.toLowerCase()
    let wynik_text = ''

    if (zupa_male == 'grochowa' || zupa_male == 'grzybowa') {
        wynik_text = 'Zupa '+ zupa_male + ' - lubię tę zupe'
    } else {
        wynik_text = 'Zupa' + zupa + '- Nie lubię tej zupy'
    }
    wynik.innerHTML = ` ${wynik_text}
    `
})