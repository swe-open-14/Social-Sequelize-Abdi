const {db} = require("../db/connection.js")
const {DataTypes} = require("sequelize");

const Profile = db.define("profile", {
    bio: DataTypes.STRING,
    ProfilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING,
});


module.exports = Profile;