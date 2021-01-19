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