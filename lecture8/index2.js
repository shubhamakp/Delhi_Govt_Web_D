// functions 

// function definition
function add(a,b){
    return a*b;
}

//function call/ invocation
var sum = add(2,6);
console.log(sum);

sum=sum*2;
console.log(sum);


// Arrow functions

const addd = () =>{
    return 5+8;
}

console.log(addd());

// Arrays

// creation

// var arrayname = [item 1, item 2,item 3];

var fruits = ["orange","mango","banana" , "kiwi"];
console.log("length of array is " +fruits.length);

// accessing array elements

console.log(fruits[2])

fruits.push("grapes");
console.log(fruits);

fruits.pop();
console.log(fruits.indexOf("mango"));