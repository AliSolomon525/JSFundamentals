/* 
SCOPE

1-grammarAndTypes
    03-scope.js
*/

/*
What is scope?

JS has both LOCAL (inside function) and GLOBAL (anything we write in near the left side) scope
var does not respect the block scope
*/

//example 1
var x = 12;

function scope(){
    var x = 33;
 // var y = 15;
    console.log(x);
}

scope(); // logs 33
/// console.log(y); // undefined (only exists in the function)
console.log(x); // logs 12

//example 2
var x = 12;

function scope(){
    x = 33;
    console.log(x);
}

scope(); // 33
console.log(x); // 33

//example 3
var x = 1

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x); //gets ran first (3)
    }
    scopeInner();
    console.log(x); //gets ran second (2)
}

scope(); //gets ran last (1)
console.log(x);

//example 4 (contrasts with 5)
var x = 12

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45 (inner scope)
    }
    console.log(x); //33 (middle scope)
}

scope();
console.log(x); //12 (global x)

//example 5 (contrasts with 4)
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 (var doesn't obey "block" scope; it's in the function/same scope)
}

scope();
console.log(x);