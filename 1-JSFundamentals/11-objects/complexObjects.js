/*
OBJECTS
*/

let netflix = {
    id:9,
    name:"Super Store",
    season1: {
        seasonInfo: {
            episodeInfo:[
                {episode: 1, episodeName: "Pilot"},
                {episode: 2, episodeName: "Magazine Profile"},
                {episode: 3, episodeName: "Mannequin"},
                {episode: 4, episodeName: "Lovely"},
                {episode: 5, episodeName: "Trying is Hard"},
                {episode: 6, episodeName: "Mostly Filler"},
                {episode: 7, episodeName: "Two Doors Down"},
                {episode: 8, episodeName: "Rocky Mountain Murder"},
                {episode: 9, episodeName: "Twelve Days of Thanksgiving"},
                {episode: 10, episodeName: "Fluff"},
                {episode: 11, episodeName: "Doggy Daycare"}
            ]
        }
    },
    season2: {},
    season3: {}
}

console.log(netflix); //drill into an object with dot notation
console.log(netflix.season1.seasonInfo.episodeInfo[3], netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//using dot notation, walk through the netflix object and print the episode number and name

console.log(netflix.season1.seasonInfo.episodeInfo[4].episode.episodeName);

//JSON - JavaScript Object Notation
//we need a standard text format for sharing info across the web

varjson= {
    "workbench.colorTheme":"One Dark+ (Sublime)",
    "window.zoomLevel":3,
    "files.exclude": {
    "**/.git":true,
    "**/.DS_Store":true,
    "**/*.js": {
    "when":"$(basename).ts"
    },
    "**/*.js.map": {
    "when":"$(basename)"
    }
    },
    "editor.fontFamily":"Monaco, 'Courier New', monospace",
    "editor.detectIndentation":false,
    "editor.letterSpacing":0,
    "editor.tabSize":2,
    "files.autoSave":"off",
    "editor.wordWrap":"on",
    "extensions.ignoreRecommendations":true,
    "[html]": {},
    "files.associations": {
    "*.html":"html",
    "*.js":"javascriptreact"
    },
    "html.format.indentInnerHtml":true,
    "editor.fontSize":11,
    "liveServer.settings.donotShowInfoMsg":true,
    "liveServer.settings.port":3500,
    "[javascriptreact]": {}
    }
    
    //spacejam object:
    let spaceJam = {
    toonSquad: {
        human:'Michael Jordan',
        rabbit1:'Bugs Bunny',
        rabbit2:'Lola Bunny',
        duck:'Daffy Duck',
        tDevil:'Tasmanian Devil',
        bird:'Tweety',
        cat:'Sylvester',
        pig:'Porky Pig'
    },
    monstars: {
        0:'Bupkus',
        1:'Bang',
        2:'Nawt',
        3:'Pound',
        4:'Blanko'
    },
    nbaPlayers: { //these are keys
        phoenixSuns:'Charles Barkley',
        newJerseyNets:'Shawn Bradley',
        newYorkNicks:'Patrick Ewing',
        charlotteHornets1:'Larry Johnson',
        charlotteHornets2:'Muggsy Bogues'
    }
    }

console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString()); //toString returns the stuff inside the array back as a string

console.log(Object.values(spaceJam));

let garden = {
    vegetable: "zucchini",
    flower: "sun flower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10,
}

let g = "water";

console.log(garden.vegetable);

let inc = "vegetable"; //dot notation looks for exactly the same thing, use brackets

console.log(garden[inc]);

let baking = {};
baking["zucchini"] = "better make some bread!";
baking.bestKeyEver = "zucchini";

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]); //baking.BestKeyEver is read first - it's value is actually zucchini

Object.keys(garden).forEach(key => {
    if (key == g){
    console.log(garden[key]);
    }
})

let favMovie = {
    nameofMovie: "Pirates of the Caribbean: Curse of the Black Pearl",
    runTime: 143,
    genre: "Action",
    characters: [
        {charOne: {name: "Captain Jack Sparrow", age: 28, items: ["pirate ship","hat"]}},
        {charTwo: {name: "Elizabeth Swan", age: 27, items: ["corset","sword"]}},
      ],
  };
  
  console.log(favMovie.nameofMovie);
  console.log(favMovie.runTime);
  console.log(favMovie.characters);
  console.log(favMovie.characters[0].charOne.name);
  console.log(favMovie.characters[0].charOne.items[1]);