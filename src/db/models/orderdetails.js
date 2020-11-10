'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetails.hasMany(models.Product, {
        foreignKey: productId
      })
    }
  };
  OrderDetails.init({
    orderId: DataTypes.UUID,
    productId: DataTypes.UUID,
    price: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};