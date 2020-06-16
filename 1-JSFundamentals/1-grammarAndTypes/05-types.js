/*
TYPES

1-grammarAndTypes
    05-types.js
*/

//Boolean - like a light switch
var on = true;
        //^^ dark blue (purple in this case) equates to reserved words
console.log(on);

let off = false;
console.log(off);

//Boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined - it exists, but it hasn't been treated yet, something was forgotten
/* 
Undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null - variable hasn't been forgotten about
/*
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(null);

/*
Null & undefined both represent variables with no value inside. Think of it this way:
Null values are for gag gifts that are boxes intentionally given with nothing inside (because that's the joke).
Undefined means values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!).
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //added an extra "9", and it rounded up
console.log(rounded);

let notQuite = 0.2 + 0.1; //Be careful with decimals/super big/small numbers
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log (stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second);

let third = 1050 + "100";
console.log(third);
console.log(typeof third);

//Interpolation
//Lets you use strings with dynamic content (require backticks)

//Example 1:
let age = "that's not my name";
let string =`my age is: ${age}`;
console.log(string);

//Objects
/*
What is an object? 

An object is a container that stores property names and their values
(it can hold multiple data types)

Denoted by {}
Have keys and values: color (key): "blue" (value), separated with a colon, each key is separated by a comma
key-value pair
*/

let hulk = {
    color:"green",
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.age); //look at a specific property in the key
console.log(typeof hulk);

//Arrays
/*
Arrays store multiple values in an ordered way. They also hold multiple data types.

Denoted by []
Has values ("blue", "green", "yellow"), separated by commas

Starts at 0
*/

var stepsToBrushTeeth = ["uncap toothpaste", "squeeze toothpaste", "rinse brush", "apply toothpaste", "brush"];
// array indexing                0                   1                   2               3                4
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[3]);
console.log(typeof stepsToBrushTeeth); //will always spit out object, not "array"


