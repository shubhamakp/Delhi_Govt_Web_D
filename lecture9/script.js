var fruits = ["orange","mango","banana" , "kiwi"];


// length , push , pop 

// shifting elements 

fruits.shift();
// console.log(fruits);
// console.log(fruits.length)

//  unshifting elements

fruits.unshift("orange");

// console.log(fruits)

fruits.unshift("sugarcane");
console.log(fruits)


// splice
// to delete in between

fruits.splice(1,2);
console.log(fruits);

// splice to add in between

fruits.splice(1,0,"coffee");
console.log(fruits);


// sorting
fruits.sort();
console.log(fruits);

// reversing the array
fruits.reverse();
console.log(fruits);



// STRINGS FUNCTIONS

var example= "Web development";
console.log(example);

let slicedExample = example.slice(0,3);
console.log(slicedExample);

console.log(example.slice(4,example.length))
console.log(example.slice(4));

// substr

console.log(example.substr(0,3));
console.log(example.substr(4,11));

// toUpperCase & toLowerCase

console.log(example.toUpperCase());
console.log(example.toLowerCase());
