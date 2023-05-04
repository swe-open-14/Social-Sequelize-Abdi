
const { Sequelize} = require("sequelize");

// this represnets the database which i'll be interacting with on behalf of the db
const db = new Sequelize({
    dialect: "sqlite",
    storage: "./db/db.sqlite",
}) 



module.exports = {
    db,
    
}