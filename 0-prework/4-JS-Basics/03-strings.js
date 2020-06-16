console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

var tweet = "Lebron is king! Knope for president!";
let facebookPost = "Just thought I'd share this video of my cat on a leash.";
const username = "alisolomon";

let age = "21";
let years = "3";
console.log(age + years);

var birthCity = "Milwaukee";
var birthState = "Wisconsin";
console.log(birthCity+", "+birthState);

let ageInAugust = 29;
let highSchool = "Columbia City High School";
let graduatedHighSchool = 2009;
const commaWithSpace= ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August", ":", ageInAugust);

let gradYear = 2009;
let highSchool2 = "Columbia City High School";
console.log("I graduated from " + highSchool2 + " in " + gradYear + ".");

//length - returns the length of a string (including spaces)
console.log(highSchool2.length);

//lower or uppercase
console.log(highSchool2.toUpperCase()); //COLUMBIA CITY HIGH SCHOOL
console.log(highSchool2.toLowerCase()); //columbia city high school

console.log(highSchool2.split(" ")); //splits the sring into an array on each space
console.log(highSchool2.slice(2, 15)); //extracts from highSchool

