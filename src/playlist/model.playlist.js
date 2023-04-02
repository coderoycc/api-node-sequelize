import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Playlist = sequelize.define(
  "playlist",
  {
    // <== This is the model name
    id_p: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_p: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_u: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
