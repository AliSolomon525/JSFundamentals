const Sequelize = require("sequelize");

//Option 1: passing parameters separately
const sequelize = new Sequelize("Journal-Walkthrough", "postgres", "pw", {
    host:"localhost",
    dialect: "postgres",
});

//now you have to authenticate it

sequelize.authenticate().then(
    function() {
        console.log("Connection has been established successfully.");
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;