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
    schema:"api"
    // Usa el esquema API
  }
);
// Relacion de un usuario a muchas playlist
User.hasMany(Playlist, { foreignKey: "id_u", sourceKey: "id_u" });
// HasMany crea una columna en la tabla Playlist con el id de la tabla user
// hasMany -> 1:N User tiene muchas playlist

Playlist.belongsTo(User, { foreignKey: "id_u", targetKey: "id_u" });
// belongsTo -> 1:1 Playlist pertenece a un Usuario
// Playlist tiene una columna con el id de la tabla User