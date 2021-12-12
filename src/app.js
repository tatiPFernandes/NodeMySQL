const{
    addMovie,
    listMovies,
    updateMovie,
    deleteMovie,
    deleteAllTable
} = require("./movie/movie.methods");
//const { update } = require("./movie/movie.model");
const yargs = require("yargs");
const { addActor, updateActor } = require("./actor/actor.methods");

const command = process.argv[2];

const app = async (args) =>{
    switch (command){
        case "addMovie":
            addMovie({
                id: args.id,
                title: args.title,
                rating: args.rating
            })
            break;
        case "listMovie":
            listMovies();
            break
        case "updateMovie":
            updateMovie({
                
                title: args.title,
                rating: args.rating
            });
            break;
        case "delete":
            deleteMovie({
                title: args.title,
                rating: args.rating
            })
            break;
            case "addActor":
            addActor({
                id: args.id,
                actor: args.actor})
            break;
        case "listActor":
            listMovies();
            break
        case "updateActor":
            updateActor({
              actor: args.actor
            });
            break;



    }
}

app (yargs.argv)