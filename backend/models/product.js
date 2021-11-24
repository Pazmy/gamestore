"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.image);
      Product.belongsToMany(models.Genre, { through: models.ProductGenre });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: "name cant be empty" },
      },
      desc: {
        type: DataTypes.STRING,
        validate: { notEmpty: "desc cant be empty" },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: "price cant be empty" },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: "stock cant be empty" },
      },
      publisher: {
        type: DataTypes.STRING,
        validate: { notEmpty: "publisher cant be empty" },
      },
      developer: {
        type: DataTypes.STRING,
        validate: { notEmpty: "developer cant be empty" },
      },
      discount: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
