function Person(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.Age = age;

    this.greet = function () {
        return "Hello this is : " + this.firstName;
    }
}



var person1 = new Person("Monu","Kumar",46);
// for in loop

for(x in person1){
    console.log(x + " : " + person1[x]);
}

// console.log(person1.greet())
var person2 = new Person("Suresh","kumar",56);
// console.log(person1);
// console.log(person1.firstName)

