import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Music = sequelize.define(
  "music",
  {
    // <== This is the model name
    id_m: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    // No crea campos adicionales proporcionados por sequelize
  }
);
