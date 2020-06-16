/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//can list datatypes in an ordered, numbered way

let students = ["Tony", "Marshall", "Ali", 23, true, ["Andrew", "Katie"]];
//hidden keys    0          1         2     3    4      5          
console.log(typeof students); //doesn't tell me my variable is an array - returns object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[1]);
console.log(students[5]);

let name = students[5][1];
console.log(`Hello ${name}, you look nice today`);

//recall for-of loop
let food = ["hamburger", "fries", "milkshake","salad", "tomato soup"];

for (f of food){
    console.log(f + " is amazing"); //use concatination
}

// //array methods - methods are built-in functions for JS
// //FYI: mozilla documentation records - has a lot of good info about arrays MDN documentation
food.push("pizza"); //"push" lets us add element to an array that already exists
console.log(food);

// //splice method 1) where is the insertion?/what position? 2) how many things to remove? 3) how many things to add?
food.splice(1, 1,"bananas"); //lets us take an array and remove/replace elements
console.log(food); 

food.splice(2, 0, "sweet potato pie"); //asks for insertion point, how many things to remove, how many things to add?
console.log(food);

// //pop method
food.pop(); //removes the last element of an array
console.log(food);

food = food.slice(2,5); //first number is first element to slice from the array, second number is the stop position (not to be included)
console.log(food);

//forEach - allows us to iterate with loops specifically and we can directly grab both the elements in their index numbers

food.ForEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} in our array is at position ${index}`);
})

let movies = ["Cinderella", "The Phantom Menace", "The Sound of Music", "Moana"];
movies.push("Rogue One");

movies.splice(3, 1, "The Little Mermaid");
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length); //5

//let's do the following with an array:
//we will check if we are working with an array
//then flip the values within an array (what was Index 4 is now in 0, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse(); //flipped the order of the array
    revArr.forEach(numbers => console.log(numbers));
}