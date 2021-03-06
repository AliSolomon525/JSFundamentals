/*
COMMENTS

1-grammarAndTypes
    01-comments-and-console.js
*/

//value of a comment: 
//communicates to anyone reading our code!

//types of comments:
// 1) single-line comment

/* 
 2) multi-line comments
*/

//console.log
//outputs some message to the console
//allows you to test your code super fast! are things working the way you expected? can sandwich these in between lines of code
//log is a method - something we can run within the console

console.log('this is a console.log message!');

console.log('you can separate parts of a console message with commas,','just like this!');

console.log(13, 15, 17, 19);

//console.log and debugging
//we can debug with console.log messages in 2 big ways:
// 1) we can check the status of some javascript 'thing'
// 2) we can check a process we have built with repeated console.log messages

//example 1:
var sampleName = 'Ali'
console.log(sampleName);

//example 2:
var sampleNum = 1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum)
sampleNum++;
console.log(sampleNum)