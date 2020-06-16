//API - Application Programming Interface - pull data from an outside source/you can tailor the data

//Promise - way we can handle asynchronous code

setTimeout(() => console.log("This is a test of timeouts!"), 1000); //just after 1 second has passed - callback function

let promise = new Promise(function(resolve,reject){ //new means you want a new version of the thing that follows it
    setTimeout(() => {
        if (false){
            resolve("success");
        } else {
            reject("failure");
        }
    }, 3000); //3 seconds
}) 

promise
    .then(success => console.log(success)) //success is a variable, you can call it whatever you want "success - success"
    .catch(err => console.log(err)) //you have to put in a catch for a failure, "err - failure"

//console.log happens in real time (after everything else has been read), but the other code waits 3 seconds, is separate from the rest of the code

console.log("This code is after everything");

function playFunc(){
    return 5;
}

console.log(playFunc());
