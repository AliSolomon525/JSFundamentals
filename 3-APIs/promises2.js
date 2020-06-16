fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    .then(res => res.json())
    .then(json => console.log(json));

async function slowResult(){
    await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
        .then(res => res.json())
        .then(json => console.log(json))
    console.log("This is a message!")
}

slowResult();

async function slowResult(){
    await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
        .then(res => res.json())
        .then(json => {json.randoProperty = "This is a random property"; return json;})
        .then(json => console.log(json))
    console.log("This is a message!")
}

slowResult();