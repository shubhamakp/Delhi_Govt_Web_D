// function add (a,b,display){
//     var sum = a+b;
//     display(sum);
// }

// function display(val){
//     console.log(val);
// }

// add(5,6,display);


// better and easy example

var greetFormal = () => {
    console.log("How are you ??");
}

function greetCasual(){
    console.log("aur kaisa hai ??");
}

function greet(type,greetFormal,greetCasual){

    if(type==='Casual'){
        greetCasual();
    }else if(type ==='Formal'){
        greetFormal();
    }
}

// greet('Casual' ,greetFormal, greetCasual);
greet('Formal',greetFormal,greetCasual);



//  Map , filter and reduce

var arr = [1,2,3,4,5,6];

// Msp
var newArr = arr.map(function(item) {
    return item*2;
})

// In ES6
// var newArray = arr.map((item) =>{
//     return item*2;
// })

console.log(arr)
console.log(newArr)

// filter
var filteredArr = arr.filter(function(item){
    return item>3;
})

console.log(filteredArr)


// reduce

// var reducedArr = arr.reduce(function(previos,current){
//     return previos+current;
// },10)

// another method to write the above thing
var reducedArr = arr.reduce(func,10);
function func(prev , curr){
    return prev+curr;
}

console.log(reducedArr)