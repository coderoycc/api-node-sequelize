import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Playlist } from "../playlist/model.playlist.js";
export const User = sequelize.define(
  "user",
  {
    // <== This is the model name
    id_u: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    // No crea campos adicionales proporcionados por sequelize
  }
);
// Relacion de un usuario a muchas playlist
User.hasMany(Playlist, { foreignKey: "id_u", sourceKey: "id_u" });
// HasMany crea una columna en la tabla Playlist con el id de la tabla user
// hasMany 

Playlist.belongsTo(User, { foreignKey: "id_u", targetKey: "id_u" });
