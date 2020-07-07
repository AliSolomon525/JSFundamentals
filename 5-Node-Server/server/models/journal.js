module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define("user", { //user is table name
        title: { //what type of column is this? you want a string. email is the name of the column
            type: DataTypes.STRING,
            allowNull: false, //won't allow null
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
        },

    })
    return Journal; //returning what we created
}