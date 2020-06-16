/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables
// 1) a variable must begin with a letter, underscore, or dollar sign
// 2) numbers may follow the above characters, but cannot come first (1 vs a1)
// 3) JS is case sensitive -- 'hello' and 'Hello' are different variables (spelling/grammar is important!)

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we "declare" a variable
Initializations refer to when a variable is assigned a value (variables can change)
Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log("Declaration 1:", x); //undefined is what you see when the variable isn't defined (unfilled)

x=10;
console.log("Initialization 1:", x);

x=33;
console.log("Assignment 1:", x);

y="Hello";
console.log(y);

y="You are my friend.";
console.log(y);

/*
Var, Let, and Const:

Var = "old" keyword for variables
Let = "new" keyword for variables (introduced with E56) - gives you more predictible behavior
Const = also "new", declares unchangeable variables (bucket with a lid!)
*/

let tonight="great!";
const elevenFifty = "Amazing!";
console.log(tonight, elevenFifty);

tonight="lovely!";
console.log(tonight, elevenFifty);

//elevenFifty="Super!"


