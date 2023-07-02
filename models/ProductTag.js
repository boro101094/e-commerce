const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "product", // Reference the 'category' table
        key: "id", // Reference the 'id' column in the 'product' table
      },
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "tag", // Reference the 'category' table
        key: "id", // Reference the 'id' column in the 'tag' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
