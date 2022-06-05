const express=require("express");

const cors=require("cors")
const bodyparser=require("body-parser")

const app=express();
app.use(cors())
// app.use(bodyparser.json())
app.use(bodyparser.json({limit: '5mb'}))

const database=require("./Utils/databaseconnection")


const Artistsroutes=require("./Routes/Artistsroutes")
const Songroutes=require("./Routes/Songsroutes.js")
const Publicroutes=require("./Routes/publicroutes")


const Users=require("./Models/Users")
const Songs=require("./Models/Songs")
const Artists=require("./Models/Artists")
const userratings=require("./Models/userratings")
const artistsongs=require("./Models/artistsongs")

Artists.belongsToMany(Songs,{through:artistsongs})
Songs.belongsToMany(Artists,{through:artistsongs})

Users.belongsToMany(Songs,{through:userratings})
Songs.belongsToMany(Users,{through:userratings})

app.use(Publicroutes)
app.use(Artistsroutes)
app.use(Songroutes)


database.sync()
.then(()=>{
    app.listen(3000)
})
.catch(err=>console.log(err))




