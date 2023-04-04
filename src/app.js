import express from "express";
import UserRoutes from "./users/routes.user.js";
import MusicRoutes from "./music/routes.music.js";
import PlaylistRoutes from "./playlist/routes.playlist.js";

const app = express();

//Rutas
app.use(UserRoutes);
app.use(MusicRoutes);
app.use(PlaylistRoutes);

export default app;