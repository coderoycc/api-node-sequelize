import express from "express";
import UserRoutes from "./users/routes.user.js";

const app = express();

//Rutas
app.use(UserRoutes);



export default app;