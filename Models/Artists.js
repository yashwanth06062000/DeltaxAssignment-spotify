const sequelize = require("sequelize");
const db = require("../Utils/databaseconnection");
const Artists = db.define("Artists", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  artistname: {
    type: sequelize.STRING,
  },
  dateofbirth: {
    type: sequelize.STRING,
  },
  bio: {
    type: sequelize.STRING,
  },
  avgrating: {
    type: sequelize.INTEGER,
  },
  totalsongs: { type: sequelize.INTEGER },
});

module.exports = Artists;
