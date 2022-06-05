const { Sequelize } = require("sequelize");
const db = require("../database/connection");

module.exports = sequelize.define("Restos", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  km: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});
