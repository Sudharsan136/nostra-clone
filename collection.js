var side = document.getElementById("lines")
var nav = document.getElementById("nav")
var clos = document.getElementById("close")
var left = document.getElementById("left")
var right = document.getElementById("right")
var image = document.getElementById("img")
var pop = document.getElementById("pop")
var btn = document.getElementById("btn")
summerimg = document.getElementById("summer")
winteimg = document.getElementById("winter")
beachimg = document.getElementById("beach")

side.addEventListener("click", function () {
    nav.style.left = 0
}
)

clos.addEventListener("click", function () {
    nav.style.left = "-50%"
})
btn.addEventListener("click", function () {
    pop.style.display = "none"
})

//here for collectopns

var ocassion = document.getElementsByName("ocasion")
ocassion[0].addEventListener("click", function () {
    if (ocassion[0].checked) {
        winteimg.style.display = "none"
        beachimg.style.display = "none"
    }
  
}
 )
