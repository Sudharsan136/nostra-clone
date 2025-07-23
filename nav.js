var side = document.getElementById("lines")
var nav = document.getElementById("nav")
var clos=document.getElementById("close")
var left=document.getElementById("left")
var right=document.getElementById("right")
var image=document.getElementById("img")
var pop=document.getElementById("pop")
var btn=document.getElementById("btn")

side.addEventListener("click", function () {
    nav.style.left=0
}
)

clos.addEventListener("click",function(){
    nav.style.left="-50%"
})

left.addEventListener('click',function(){
        image.style.translatex="20"
})
btn.addEventListener("click",function(){
    pop.remove()
})
