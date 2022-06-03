const sequelize = require('sequelize');
const db= require('../Utils/databaseconnection');
const Songs=db.define('Songs',{
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        songname:{
            type: sequelize.STRING
        },
        dateofrelease :{
            type:sequelize.STRING
        }
        ,coverimage:{
            type:sequelize.STRING,
        }
        ,
        avgrating:{
            type:sequelize.INTEGER
        },
        totalratings:{type:sequelize.INTEGER}
})

module.exports = Songs;