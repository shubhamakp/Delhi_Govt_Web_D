// function firstFunc() {


//     console.log("hello from first function");
//     let msg = " Shubham";
//     console.log("hello " + msg );

//     // second function inside
//     function secFunc(){
//         console.log("hello from second function" + msg);
//     }

//     return secFunc;
// }


// var funcCall = firstFunc();  // first function called and executed

// funcCall();



// Another Closure example

function makeAdder(x){

    return function(y){
        console.log(x+y);
    }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

add5(2);
add10(3)