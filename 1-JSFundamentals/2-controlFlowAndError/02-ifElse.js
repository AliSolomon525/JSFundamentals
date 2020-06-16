//IF ELSE

let weather = 75;

if(weather < 70){
    console.log("Wear a jacket");
} else {
    console.log("No jacket necessary");
}

//you can blend complex conditionals and if-else statements based upon your need:
if(weather > 70 && typeof weather === "number"){
    console.log("This weather is amazing!");
} else {
    console.log("Either the temp is cool, the variable isn't a string, or both")
}

//ELSE IF

//if-elseif statements can be chained

let age = 22;

if(age >= 25){
    console.log("You can rent a car!");
} else if (age >= 21){
    console.log("You can drink!");
} else if (age >= 18){
    console.log("You can vote!");
} else {
    console.log("You're a kid.");
}

