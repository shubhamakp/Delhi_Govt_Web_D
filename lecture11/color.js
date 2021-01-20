var colorInput = document.getElementById("colorInput");
var btn = document.getElementById("btn");
var box = document.getElementById("box");

btn.onclick = function () {
    var value = colorInput.value;
    box.style.backgroundColor = value;
}