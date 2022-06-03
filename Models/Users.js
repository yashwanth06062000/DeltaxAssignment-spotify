const sequelize = require('sequelize');
const db= require('../Utils/databaseconnection');
const Users=db.define('Users',{
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username:{
            type: sequelize.STRING
        },
        email :{
            type:sequelize.STRING
        },
        password:{
            type:sequelize.STRING
        }
})

module.exports = Users;