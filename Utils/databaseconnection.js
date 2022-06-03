const sequelize=require("sequelize");
const Sequelize=new sequelize("spotify","root","Thisonlyme@1",{
    dialect:'mysql',
    host:"localhost"
});
module.exports=Sequelize;