const getPlaylist = async (req, res) => {
  const { id } = req.params;
  const playlist = await Playlist.findOne({
    attributes: ["id_p", "name"],
    where: {
      id_p: id,
    },
  });
  res.json(playlist);
};

const getPlalists = async (req, res) => {
  const playlist = await Playlist.findAll();
  res.json(playlist);
};

const createPlaylist = async (req, res) => {
  const { name } = req.body;
  try {
    let newPlaylist = await Playlist.create(
      {
        name,
      },
      {
        fields: ["name"],
      }
    );
    if (newPlaylist) {
      return res.json({
        message: "Playlist created successfully",
        data: newPlaylist,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Se ha cometido un error",
      data: {},
    });
  }
};

const updatePlaylist = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const playlists = await Playlist.findAll({
    attributes: ["id_p", "name"],
    where: {
      id_p: id,
    },
  });
  if (playlists.length > 0) {
    playlists.forEach(async (playlist) => {
      await playlist.update({
        name,
      });
    });
  }

  return res.json({
    message: "Playlist updated successfully",
    data: playlists,
  });
};

const deletePlaylist = async (req, res) => {
  const { id } = req.params;
  await Playlist.destroy({
    where: {
      id_p: id,
    },
  });
  res.json({
    message: "Playlist deleted successfully",
  });
};

