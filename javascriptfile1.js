function waitingfn(timeinms){
    const futuretime=Date.now() +timeinms;
    while (futuretime > Date.now()){

    }
}
debugger;
waitingfn(3000);
console.log("fuction call has just ended");