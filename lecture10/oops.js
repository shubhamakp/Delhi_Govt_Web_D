class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return this.title + " was written by " + this.author + " in year " + this.year;
    }

    getAge(){
        let y = 2020 - this.year;
        return "this book is " + y + " years old";
    }

    revise(newYear){
        this.year=newYear;
        this.revised = true; 
    }

    static BookStore(){
        return "DaryaGanj and Nai Sadak";
    }
}

var book1 = new Book("Harry Potter" , "J.K. Rowling",2005);
var book2 = new Book("My Experiments with truth","Mahatma Gandhi",1930);

// console.log(book1);
// console.log(book1.getSummary())
// console.log(book1.getAge())

console.log(book2);
book2.revise(1990);
console.log(book2)

// Accessing static function through "direct class name"
console.log(Book.BookStore())
// console.log(book2.getSummary())
// console.log(book2.getAge())

//Magzine class is inheriting the features of Book class
class Magzine extends Book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}

var mag1 = new Magzine("Godaan","Munshi PremChand",1925,"February");
var mag2 = new Magzine("2 States","Chetan Bhagat",2012,"November");
console.log(mag2);

console.log(mag1.getSummary())