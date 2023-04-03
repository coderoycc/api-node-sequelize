import app from './app.js';
import { config } from 'dotenv';
config();
import { sequelize } from './database/database.js';

// Importamos los modelos para que se creen las tablas en la base de datos
import './users/model.user.js';
import './music/model.music.js';
import './playlist/model.playlist.js';
import './playlistMusic/model.playlistMusic.js';

app.listen(process.env.PORT, async () => {
  console.log(`server is running on port ${process.env.PORT}`);
  try {
    // prueba de la conexión de la base de datos
    //await sequelize.authenticate();
    //console.log('database is connected');
    await sequelize.sync(/* { force: true } */);
  } catch (error) { 
    console.log(error);
  }
})