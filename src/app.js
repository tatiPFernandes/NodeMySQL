const{addMovie, listMovies, updateMovie, deleteMovie} = require("./movie/movie.methods");
const { addActor, updateActor, deleteActor } = require("./actor/actor.methods");
const yargs = require("yargs");
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
                id: args.id,
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
        case "deleteActor":
            deleteActor({
                actor: args.actor,
                
                });
            break;


    }
}

app (yargs.argv)