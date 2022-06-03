const express=require("express");

const app=express();

const database=require("./Utils/databaseconnection")


const Users=require("./Models/Users")
const Songs=require("./Models/Songs")
const Artists=require("./Models/Artists")
const userratings=require("./Models/userratings")
const artistsongs=require("./Models/artistsongs")

Artists.belongsToMany(Songs,{through:artistsongs})
Songs.belongsToMany(Artists,{through:artistsongs})

Users.belongsToMany(Songs,{through:userratings})
Songs.belongsToMany(Users,{through:userratings})


database.sync()
.then(()=>{
    app.listen()
})
.catch(err=>console.log(err))




