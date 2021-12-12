//const { where } = require("sequelize/dist");
const Movie = require("./movie.model");
const { update } = require("./movie.model");


//Movie.hasMany(actor)
exports.addMovie = async(movieObj) =>{
    try{
        await Movie.sync();
        await Movie.create(movieObj)
        return`Successfully cerated ${movieObj.title, movieObj.rating}`
    }catch(err){
        console.log(err)
    }
};

exports.listMovies = async ()=>{
    try{
        console.log(await Movie.findAll({
            where:{
                title: "Spiderman"
            }
        }))
    }catch(err){
        console.log(err)
    }
}

exports.updateMovie = async(movieObj)=>{
    try{
        await Movie.update(
            {actor: movieObj.actor},
            {where:{ title: movieObj.title}}
        );
        console.log("updated")
    }catch(err){
        console.log(err);
    }
}
 
exports.deleteMovie = async(movieObj) =>{
    try{
        await Movie.destroy({
            where:{
                id: movieObj.id,
                title:movieObj.title
            }
        })
    }catch(err){
        console.log(err)
    }
}