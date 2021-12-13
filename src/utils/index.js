const sequelize = require("../db/connection");
const Movie = require("../movie/movie.model")
const Actor = require("../actor/actor.model")


Movie.hasMany(Actor)

sequelize
    
    .sync({force: true})
    //.sync()
    .then((result) =>{
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })