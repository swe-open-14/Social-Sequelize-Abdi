const {db} = require("../db/connection.js")
const {DataTypes} = require("sequelize");

const User = db.define("user", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
});


module.exports = User;