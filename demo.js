const sec = document.querySelector(".sec");
const hitme = document.querySelector(".b1");
const closeup = document.querySelector(".closeup");
const lightup = document.querySelector(".show")
const dark = document.querySelector(".show1")


function open(){
    sec.style.display = "block"
}

function close(){
    sec.style.display = "none"
}

function light(){
sec.style.background = "white"
}

function black(){
sec.style.background = "black"
}

hitme.onclick = open;
closeup.onclick = close;

lightup.onclick = light;
dark.onclick = black;
