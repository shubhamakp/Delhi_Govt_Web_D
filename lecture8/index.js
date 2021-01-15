// to check whether a number is odd or even 

var x = 12;  // variable declaration and initialization

if (x % 2 == 0) { //condition 1 checked
    let z = 12;
    var q = 13;
    console.log(x + " is Even");
} else {
    console.log(x + " is Odd");
}

// console.log(x);
// console.log(z);
// console.log(q);


// Another if else exmaple code 

var marks = 99;

if (marks >= 80) {
    console.log("A grade");
} else if (marks >= 60 && marks < 80) {
    console.log("B grade");
} else if (marks >= 40 && marks < 60) {
    console.log("C grade");
} else {
    console.log("F grade");
}

// Loops in Javascript


// for loop 
// for(var i = 1 ; i <= 10 ; i++ ){
//     console.log("hello  " + i);
// }

// while loop

// var k = 1;
// while(k<=10){
//     console.log("hello " + k);
//     // update 
//     k++;
// }


//  do while loop

// var q = 9;
// do{
//     console.log("hello everyone "+q);
//     q--;
//     if(q<0){
//         break;
//     }
// }while(q<=10);



// to check whether a number is prime or not 

// var number = 2;
// var isPrime = true;

// for(var i = 2; i < number ; i++){
//     if(number % i == 0){
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime==true && number != 1){
//     console.log(number + " is prime");
// }
// else {
//     console.log(number + " is not prime");
// }


// Another method 

// var number = 1;
// var isPrime = true;

// if (number == 1) {
//     console.log(number + " not prime");
// } else {
//     for (var i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime == true) {
//         console.log(number + " is prime");
//     }
//     else {
//         console.log(number + " is not prime");
//     }
// }