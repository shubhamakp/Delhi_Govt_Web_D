var div = document.getElementById("div")

// Add()
div.onclick = function(){
    div.classList.add("divStyle")
}

var btn = document.getElementById("btn");


// remove 
btn.onclick = function (){
    div.classList.remove("divStyle");
}

// Toggle

var btn2 = document.getElementById("btn2");
var para = document.getElementById("para");
btn2.onclick = function(){
    para.classList.toggle("newPara");
}