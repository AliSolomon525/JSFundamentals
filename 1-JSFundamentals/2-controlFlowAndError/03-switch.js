/*
SWITCH STATEMENTS
*/

let friend = "Tom";

switch(friend){ //stuff in () gets ran against the cases
    case "Tom":
        console.log("Hey Tom, where's lunch?");
        break;
    case "Ken":
        console.log("Hey Ken, where's Barbie?");
        break;
    case "Alex":
        console.log("Hey Alex, how many magic cards do you own?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch (typeof yep == "string" || typeof yep == "boolean"){
    case true:
        console.log("yep is a string or a boolean");
        break;
    default:
        console.log("yep is not a string or a number");
}