/*
FOR IN LOOPS
*/

//good for working through objects & arrays
//in does not require that the thing you're looping through be a number

let student = {name: "Ali", awesome: true, degree: "javascript", week: 1};

for (item in student){
    console.log(item); //lets it run the keys
    console.log(student[item]);
}

let watches = {brand: "Movado", expensive: true, number: 1}

for (item in watches){
    console.log(watches.expensive);
} 

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "ragdoll"];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for-in loop that capitalizes the first letter of a name

let instructor = "pAuL";
let capName;

for (n in instructor){
    if (n == 0){ //when instructor n = 0, take the instructor name and set it equal to the first letter in instructor
       capName = instructor[n].toUpperCase(); 
    }   else { //take whatever we have in capName and add the next letters in lowercase
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);
