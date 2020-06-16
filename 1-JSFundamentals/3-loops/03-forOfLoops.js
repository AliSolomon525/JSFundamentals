/*
FOR OF LOOPS
*/

//of requires that your "thing" you're looping through be iterable
//means it needs to be numbered
//really only works with arrays

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "ragdoll"];

for (cat of catArray){
    console.log(cat, "says meow");
}

let gardenArray = ["tomatoes", "peppers", "lettuce"];

for (plant of gardenArray){
    console.log(plant, "tastes yummy"); //variable of array can be whatever you want
}