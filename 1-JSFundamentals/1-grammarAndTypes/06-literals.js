/* 
LITERALS

1-grammarAndTypes
    06-literals.js
*/

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: "Chicken Noodle",
    b: "Tomato",
    c: "Potato",
    d: "Vegetable",
}
console.log(soup.c);

//array and object literals are super dynamic (esp over primitive types - numbers, null, etc.
//can hold primitive and complex types

let complexArrLiteral = [1, true, "Academy", [1,2,3], {key: "text"}, function(){return "yes"}];
//                       0    1        2        3           4               5
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: "Academy", arr: [1,2,3], obj: {key: "test"}, func: function(){return "yes"}};
//Objects built with {}, not []
console.log(complexObjLiteral.func);
