const Actor = require("./actor.model")
const { update } = require("./actor.model");

exports.addActor = async(actorObj) =>{
    try{
        await Actor.sync();
        await Actor.create(actorObj)
        return`Successfully cerated ${actorObj.title}`
    }catch(err){
        console.log(err)
    }
};

exports.listActor = async ()=>{
    try{
        console.log(await Actor.findAll({}))
    }catch(err){
        console.log(err)
    }
}

exports.updateActor = async(actorObj)=>{
    try{
        await Movie.update(
            {actor: actorObj.actor},
            {where:{ title: actorObj.title}}
        );
        console.log("updated")
    }catch(err){
        console.log(err);
    }
}