const numbers = document.getElementsByClassName("number")
const output = document.getElementById("output")
const operators = document.getElementsByClassName("operator")
const clear = document.getElementById("clear")
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal")

for(let i = 0 ; i < numbers.length ; i++ ){
    const num = numbers[i];
    num.onclick = function(){
        var x = output.innerText;
        var newOutput = x + num.value;
        output.innerText = newOutput;
    }
}

for(i = 0 ; i < operators.length ; i++ ){

    const op = operators[i];
    op.onclick = function(){
        var x = output.innerText;
        var newOutput = x + op.value;
        output.innerText = newOutput;
    }
}

clear.onclick = function(){
    output.innerText="";
}

backspace.onclick = function (){
    var string = output.innerText;
    var newString = string.slice(0,string.length-1);
    output.innerText=newString
}

equal.onclick = function (){
    var result = output.innerText;
    output.innerText = eval(result);
}