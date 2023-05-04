const {db} = require("../db/connection.js")
const {DataTypes} = require("sequelize");

const Post = db.define("post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
});


module.exports = Post;