const sequelize = require("sequelize");
const db = require("../Utils/databaseconnection");
const userratings = db.define("userratings", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  rating: {
    type: sequelize.INTEGER,
  },
});

module.exports = userratings;
