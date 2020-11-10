'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      Product.belongsTo(models.OrderDetails)
    }
  };
  Product.init({
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};