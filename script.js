let time = 5
let countdown = document.getElementById("countdown")
let button = document.getElementById("moreBtn")

let timer = setInterval(function(){

time--
countdown.innerText = time

if(time == 0){
clearInterval(timer)
button.style.display="inline-block"
}

},1000)


button.onclick = function(){
window.scrollTo({
top:600,
behavior:"smooth"
})
}

let seal = document.querySelector(".seal")
let letter = document.getElementById("letter")

seal.onclick = function(){
letter.style.display="block"
}

let back = document.querySelector(".backBtn")

back.onclick = function(){
window.scrollTo({
top:0,
behavior:"smooth"
})
}