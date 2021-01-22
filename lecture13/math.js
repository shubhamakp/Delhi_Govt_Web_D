// PI
var x = Math.PI;
console.log(x);

// Power function
var y = Math.pow(8, 3);
console.log(y);

// Square Root
var z = Math.sqrt(846);
console.log(z);

// Round of
var roundOfZ = Math.round(z);
console.log(roundOfZ)
console.log(Math.round(29.8))

// Ceil and Floor

console.log("ceil of 3.2 is : " + Math.ceil(3.2));
console.log("floor of 3.2 is : " + Math.floor(3.2));

// abs
console.log("Absolute value of -3 is " + Math.abs(-3));

// Max and min

var max = Math.max(0, 150, -3, 4, 11);
var min = Math.min(0, 150, -3, 4, 11);

console.log("max = " + max + " min = " + min);

// random


var value = Math.ceil(Math.random() * 6);
console.log(value);


var div = document.getElementById("div")

setInterval(()=>{
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);


    var color = "rgb(" + r + "," + g + "," + b + ")";
    div.style.backgroundColor = color;
},200)



