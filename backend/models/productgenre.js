"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductGenre.belongsTo(models.Product);
      ProductGenre.belongsTo(models.Genre);
    }
  }
  ProductGenre.init(
    {
      ProductId: DataTypes.INTEGER,
      GenreId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductGenre",
    }
  );
  return ProductGenre;
};
