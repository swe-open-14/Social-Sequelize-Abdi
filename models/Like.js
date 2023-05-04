const {db} = require("../db/connection.js")
const {DataTypes} = require("sequelize");

const Like = db.define("like", {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING,
});

module.exports = Like;