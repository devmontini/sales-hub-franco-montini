const Sequelize = require("sequelize");

const sequelize = new Sequelize("graph", "root", "123123", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.export = sequelize;
global.sequelize = sequelize;
