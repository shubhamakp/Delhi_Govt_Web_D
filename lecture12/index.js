// Button onclick on heading
var heading = document.getElementById("heading");

heading.onclick = function(){
    heading.innerText = "As i said";
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


// onmouseover and onmouseout event

var div = document.getElementById("div");
div.onmouseover = function(){
    div.innerText = "ThankYou";
}

div.onmouseout = function(){
    div.innerText = "Again you can Mouse Over Me";
}

div.onmousedown = function(){
    div.style.backgroundColor = "red";
}

div.onmouseup = function (){
    div.style.backgroundColor = "purple";
}


// onkeyup & onkeydown & onkeypress Event

input.onkeyup = function (){
    input.value = input.value.toUpperCase();
}


input.onkeydown = function (){
    alert("key has been pressed");
}

input.onkeypress = function (){
    alert("key has been pressed");
}