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