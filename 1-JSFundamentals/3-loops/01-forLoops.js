/*
LOOPS

3-loops
    01-forLoops.js
*/

/*
Loops offer a quick and easy way to do something repeatedly.
There are different kinds of loops but they all do basically the same thing:
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of 
    .forEach (just for arrays)
    .map (just for arrays)
*/

//loop structure: a) creation of an indexing variable b) a run condition c) change to the indexing variable

//count to 10 from 0 and log the numbers:
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// loops can run infinitely - don't do it!! it will break your code

//counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >= -25; i = i - 3){
    console.log(i);
}

//display the letters in a name individually
let name = "Alexandra";

for (let i = 0; i < name.length; i++){
    console.log(name[i]); //you can think of the name like an array (accessing individual characters)
}

//for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random()*30); //built-in object with a random number from 0-1 (includes decimals). Math.floor cuts off the decimal part
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}

for(i = 0; i <= 10; i++){
    evenOdd(i);
  }
  
  function evenOdd(num){
    console.log(num);
    if (num%2 === 0) {
     console.log("the number is even");
     } else {
     console.log ("the number is odd");
    }
  }