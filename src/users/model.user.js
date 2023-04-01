import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define('user', { // <== This is the model name
  id_u: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  timestamps: false
  // No crea campos adicionales proporcionados por sequelize
});