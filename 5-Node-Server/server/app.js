require("dotenv").config();
let express = require('express');
const app = express();
const sequelize = require("./db");

let journal = require("./controllers/journalcontroller");
let user = require('./controllers/usercontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use(require("./middleware/headers"));
app.use(express.json());


app.use("/user", user);
app.use("/journal", journal);

app.listen(3000, function(){
    console.log("app is listening on port 3000");
}); //3000 references a port

//TESTING
//once you instigate node, you have to CTRL+C to back out of it... super annoying

//do nmp install -g nodemon

//localhost:3000/test

// app.use("/test", function(req, res) {
//     res.send("This is a test route");
// });

// app.use("/about-me", function (req, res){
//     res.send("My name is Ali and my age is 29.");
// });



