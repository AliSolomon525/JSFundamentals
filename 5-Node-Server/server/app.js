var express = require('express');
var app = express();

//localhost:3000/test

app.use("/test", function(req, res) {
    res.send("This is a test route");
});

app.use("/about-me", function (req, res){
    res.send("My name is Ali and my age is 29.");
});

app.listen(3000, function(){
    console.log("app is listening on port 3000");
}); //3000 references a port

//once you instigate node, you have to CTRL+C to back out of it... super annoying

//do nmp install -g nodemon

