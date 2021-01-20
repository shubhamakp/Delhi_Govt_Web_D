const h1 = document.getElementById("demo");
h1.innerText = "inserted by javascript";


const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const span = document.getElementById("span");

btn.onclick = function () {
    let value = inputBox.value;
    span.innerText = value;
    inputBox.value = "";
}