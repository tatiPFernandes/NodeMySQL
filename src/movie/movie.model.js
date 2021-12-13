const sequelize = require("../db/connection");
const {DataTypes} = require("sequelize");



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