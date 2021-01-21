// Button onclick on heading
var heading = document.getElementById("heading");

heading.onclick = function(){
    heading.innerText = "As i said"
}


// Date function
var btn = document.getElementById("btn");
var p = document.getElementById("paragraph");
btn.onclick = function(){
    p.innerText = Date();
}


// onchange Event

var input = document.getElementById("fname");
input.onchange = function(){
    input.value = input.value.toUpperCase();
}