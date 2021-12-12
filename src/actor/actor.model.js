const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");
//const { update } = require("./movie.model");


//Movie.hasMany(Actor)

sequelize
    
    .sync({force: true})
    //.sync()
    .then((result) =>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })
const Actor = sequelize.define("Actor",{
   
    id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true},

    actor: {
    type:DataTypes.STRING,
    allowNull: false
}
    
})
module.exports = Actor;