var tm = 0

function menuToggle() {
    var menu = document.querySelector('.menu')
    var menuBox = document.querySelector('.menuSide')

    menu.classList.toggle('trans')
    menuBox.classList.toggle('trans')

}
var bSec = document.getElementById('bSec')
var qSec = document.getElementById('qSec')
var passage = document.getElementById('passage')
var bible = document.getElementById('bible')
var quran = document.getElementById('quran')


bible.onclick = () => {
    bSec.style.left = "0vw"
    qSec.style.left = "0vw"
    bSec.style.height = ""
    qSec.style.height = "0px"
}

quran.onclick = () => {

    bSec.style.left = "-93vw"
    qSec.style.left = "-93vw"
    bSec.style.height = "0px"
    qSec.style.height = ""
}