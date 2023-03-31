import app from './app.js';
import { config } from 'dotenv';
config();
import { sequelize } from './database/database.js';


app.listen(process.env.PORT, async () => {
  console.log(`server is running on port ${process.env.PORT}`);
  try {// prueba de la conexión de la base de datos
    await sequelize.authenticate();
    console.log('database is connected');
  } catch (error) { 
    console.log(error);
  }
})