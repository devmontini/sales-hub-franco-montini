"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("restos", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(300),
      },
      km: {
        type: Sequelize.INTEGER,
      },
      createAt: Sequelize.DATE,
      updateAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("restos");
  },
};
