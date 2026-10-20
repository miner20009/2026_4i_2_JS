let imie = document.querySelector("#imie");
let wynik = document.querySelector(".wynik");
let btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let Imie = imie.value;
    wynik.innerHTML = Imie;
})