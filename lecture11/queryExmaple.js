// it acts as if it is a css selector
var ptag = document.querySelector("#para");
var btn = document.getElementById("btn");

btn.onclick = function(){
    ptag.style.backgroundColor = "blue";
}

var heading = document.querySelectorAll("h1");
var button = document.getElementById("button");

button.onclick = function(){
    for(var i =0; i < heading.length ; i++){
        heading[i].style.backgroundColor = "red";
    }
    
}

