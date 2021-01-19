function nwReq () {
    setTimeout(()=>{
        console.log("Async code")
    }, 3000);
}

console.log("start");
nwReq();
console.log("End");