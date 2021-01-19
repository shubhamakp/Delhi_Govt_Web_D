// creating object
// object literal

var person = {
    firstName : "Monu",
    lastName : "Kumar",
    Age : 46,
    height : 5.2,
    func : function(){
        console.log("very high speed")
    }
}

// Adding a property
person.friend = "Shubham";

console.log(person)

// using new Keyword
// var person = new Object();
// person.name = "Shubham";
// console.log(person);


// Accesing property of objects

var first = person.firstName;
console.log(first);
console.log(person.Age);

var last = person["lastName"];
console.log(last);


// objects are mutable

// var x = 10;
// var y = x;
// y=y+10;
// console.log("x : " + x + " and y : " + y);


var x = person;
x.address = "delhi";
console.log(person)