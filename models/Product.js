// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true, // Validate that the value is a decimal number
      },
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true, // Validate that the value is a numeric value
      },
    },
    category_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "category", // Reference the 'category' table
        key: "id", // Reference the 'id' column in the 'category  ' table

      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
