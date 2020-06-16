/*
ARROW FUNCTIONS
*/

//normal function declaration
function coffee(){ //unnamed functions
    return "coffee is good";
}

//normal function expression
let tea = function(){ //unnamed function - to call it, use the variable name
    return "tea is healthy";
}

console.log(coffee());
console.log(tea());

//arrow functions are **always** anonymous (meaning it's unnamed) & they do not get hoisted
//arrow function expression
let hotChocolate = () => {
    return "hot chocolate is king!" 
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2))
console.log(animals(0,0));

//concise vs. block body
//concise body
let apples = x => `There are ${x} apples.`
console.log(apples(0));

//block body
let bananas = x => {
    return `There are ${x} bananas.`;
}

console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => "hi";

console.log(func());

let secondFunc = () => "hi";

console.log(secondFunc());