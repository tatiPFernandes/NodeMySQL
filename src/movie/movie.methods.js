
const { arg } = require("mathjs");
const Movie = require("./movie.model");
const { update } = require("./movie.model");



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
        console.log(await Movie.findAll({}))
    }catch(err){
        console.log(err)
    }
}

exports.updateMovie = async(movieObj)=>{
    try{
        await Movie.update(
            {title: movieObj.title}, {where:{id: movieObj.id
    }});
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