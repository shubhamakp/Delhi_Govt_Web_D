const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const listt = document.getElementById("list");

btn.onclick = function(){
    var value = inputBox.value;
    inputBox.value = "";
    const newListItem = document.createElement("li");
    newListItem.innerText = value;
    listt.append(newListItem);
}