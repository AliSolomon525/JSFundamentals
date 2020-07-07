// const header = document.getElementById('header');
// console.log(header);

// document.getElementById("header").style.color="green"; //long version

// header.style.color="pink"; //you can substitute header for the initial part

// header.innerText="Hello World"; //this changed your header from 1150 Gold Badge to Hello World!

// const errorList = document.getElementsByClassName("error-list");
// console.log(errorList);

// errorList[1].innerText = "I changed error 2"; //you're grabbing it out of the HTML collection, grabbing "error 2" which is actually 1 in the array

// errorList[0].innerText = "I changed error 1";

// //Example 1 Looping
// for(let i = 0; i < errorList.length; i++) {
//     errorList[i].style.color="red";
// }

// //Example 2 Looping
// for(error of errorList) {
//     error.style.color="green";
// } 

// //you cannot do a forEach with this

// //Example 3 Looping forEach
// // errorList.forEach(error => error.style.color="purple"); 

// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "I changed the paragraph!" //the tag is at the 0 position in the console log

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// // listItems[0].style.fontStyle = "italic"; //changes the first list item

// // listItems[1].style.fontStyle = "italic"; //changes the 2nd list item

// //use for multiple tags
// for(let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontStyle = "italic";
// }

// const header = document.querySelector("h1");
const header = document.querySelector("#header"); //you can do either one!
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)"); //the 2 in the () refers to the second HTML collection
console.log(errorList2);

const headerTags = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTags[1]); //grabs Error List 1

headerTags.forEach((h) => {
    h.style.color="orange";
}); //h is just a parameter - it changed both h1 tags to orange

const listItems = document.querySelectorAll(".error-list")

listItems.forEach(li => {
    li.style.fontStyle="italic";
})
