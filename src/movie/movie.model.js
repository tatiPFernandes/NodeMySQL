const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");
//const { update } = require("./movie.model");
//const Movie = require("./movie.methods")
//const Actor = require("./actor.methods")

//Movie.hasMany(Actor)

sequelize
    
    //.sync({force: true})
    .sync()
    .then((result) =>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })


const Movie = sequelize.define("Movie",{
    
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
       primaryKey: true

    },

    title: {
    type: DataTypes.STRING,
    allowNull: false

},
    rating: {
     type: DataTypes.INTEGER,
     allowNull: false
    }
})


module.exports = Movie;