'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      customerId: {
        type: Sequelize.UUID
      },
      amount: {
        type: Sequelize.INTEGER
      },
      shippingAddress: {
        type: Sequelize.STRING
      },
      orderAddress: {
        type: Sequelize.STRING
      },
      orderEmail: {
        type: Sequelize.STRING
      },
      orderStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Order');
  }
};