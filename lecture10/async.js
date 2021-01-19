// setTimeout
setTimeout(()=>{
    console.log("it will print after 5 sec");
} , 5000)


// setInterval
var count = 0;
setInterval(()=>{
    count++;
    console.log("it will print after every 1 sec " + count);
} , 1000)


var count = 0;
let intervalId  = setInterval(()=>{
    count++;
    console.log("it will print after every 1 sec " + count);
    if(count>=5){
        clearInterval(intervalId)
    }
} , 1000)