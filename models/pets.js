const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/connection");

class Pets extends Model {}

// define table columns and configuration
Pets.init(
  {
    // TABLE COLUMN DEFINITIONS
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "owner",
        key: "id",
      },
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pets",
  }
);

module.exports = Pets;
