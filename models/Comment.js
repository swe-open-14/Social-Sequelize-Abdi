const {db} = require("../db/connection.js")
const {Database, DataTypes} = require("sequelize");

const Comment = db.define("comment", {
    title: DataTypes.STRING,
    createdAt: DataTypes.STRING,
});


module.exports = Comment;