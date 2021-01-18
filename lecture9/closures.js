function firstFunc() {


    console.log("hello from first function");
    let msg = " Shubham";
    console.log("hello " + msg );

    // second funcction inside
    function secFunc(){
        console.log("hello from second function" + msg);
    }

    return secFunc;
}


var funcCall = firstFunc();  // first function called and executed

funcCall();