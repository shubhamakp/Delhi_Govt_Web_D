var person = {
    firstName : "Monu",
    lastName : "Kumar",
    Age : 46,
    height : 5.2,
    func : function(){
        console.log("very high speed");
        return "Say hello";
    },

    x : {
        food : "Paneer"
    }
}

// console.log(person)

person.city = "Delhi";
person.Age = 36;
console.log(person)
console.log(person.x.food);



// Prototype

let p = {
    a : 10
}

let q = Object.create(p);  // it will use p as its prototype/blue print.
q.b = 15;


let r = Object.create(q);

r.c = 20;
console.log(p);
// console.log( " p's a :" + p.a)
console.log(q);
// console.log("q's b :" + q.b)
// console.log("q's a : " +q.a)
console.log(r);
console.log(r.a)
