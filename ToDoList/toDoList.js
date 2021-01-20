const inputBox = document.getElementById("inputBox");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick = function (){

    const newTask = inputBox.value;
    inputBox.value = "";
    const listItem = document.createElement("li");
    const upBtn = document.createElement("button");
    const downBtn = document.createElement("button");
    const crossBtn = document.createElement("button");
    listItem.append(newTask);

    listItem.classList.add("liItem");

    // cross button
    crossBtn.innerText = "X";
    crossBtn.classList.add("crossBtn");
    crossBtn.onclick = function(){
        listItem.remove();
    }
    listItem.append(crossBtn);

    // up button
    upBtn.innerText = "U";
    upBtn.classList.add("upBtn");
    upBtn.onclick = function(){
        taskList.insertBefore(listItem,listItem.previousElementSibling);
    }
    listItem.append(upBtn);

    // down button
    downBtn.innerText = "D";
    downBtn.classList.add("downBtn");
    downBtn.onclick = function(){
        taskList.insertBefore(listItem,listItem.nextElementSibling.nextElementSibling);
    }
    listItem.append(downBtn);

    taskList.append(listItem);

}