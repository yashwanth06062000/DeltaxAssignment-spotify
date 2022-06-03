const sequelize = require('sequelize');
const db= require('../Utils/databaseconnection');
const artistsongs=db.define('artistsongs',{
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
})

module.exports = artistsongs;