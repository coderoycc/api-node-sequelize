import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Playlist } from '../playlist/model.playlist.js';
import { Music } from '../music/model.music.js';
export const PlaylistMusic = sequelize.define(
  'playlistMusic',{
  id_p: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Playlist,
      key: 'id_p',
    },
  },
  id_m: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Music,
      key: 'id_m',
    },
  }
});
// Relacion de una playlist a muchas musicas
Playlist.belongsToMany(Music, {
  through: PlaylistMusic, // N:M
  foreignKey: 'id_p',
  otherKey: 'id_m',
});
// belongsToMany -> Playlist pertence a muchas musicas
// through -> tabla intermedia (por medio de | a traves de)


// Relacion de una musica a muchas playlist
Music.belongsToMany(Playlist, {
  through: PlaylistMusic, //N:M
  foreignKey: 'id_m',
  otherKey: 'id_p',
});
// belongsToMany -> Un musica pertenece a muchas playlist
// through -> tabla intermedia (por medio de | a traves de) 
