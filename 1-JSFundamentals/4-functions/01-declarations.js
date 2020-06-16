/*
FUNCTIONS
*/

//General ideas: at their broadest level, functions do the following:
// 1) they take some input which the function will handle or process
// 2) they process the input given to them
// 3) they usually (but not always) return some value
// 4) they can be invoked (used) as many times as we want, cutting down on code repetition

//Example 1
function newFunc(num){
    return num+1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//Example 2
function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence("Ali", "Solomon"));

let superSentence = sentence("Luke", "Skywalker");
console.log(superSentence);

//let's build a function that takes a complex type (like array) and console.logs each item in input array

let arr = [1, true, {key: "string"}, [0, false, null], "hey!"]
let arr2 = [5,6,7,8,9,10]

function iteratorFunc(inputArr){
    for (let element of inputArr){ //this is called a side effect, doesn't actually return anything, it just logs it
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);


