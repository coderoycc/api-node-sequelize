export const getMusic = async (req, res) => {
  const music = await Music.findAll();
  res.json(music);
};  

export const getMusicById = async (req, res) => {
  const { id } = req.params;
  const music = await Music.findOne({
    where: {
      id_m: id,
    },
  });
  res.json(music);
};

export const createMusic = async (req, res) => {
  const { name, duration, id_a } = req.body;
  try {
    let newMusic = await Music.create(
      {
        name,
        duration,
        id_a,
      },
      {
        fields: ["name", "duration", "id_a"],
      }
    );
    if (newMusic) {
      return res.json({
        message: "Music created successfully",
        data: newMusic,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
};

export const updateMusic = async (req, res) => {
  const { id } = req.params;
  const { name, duration, id_a } = req.body;

  const musics = await Music.findAll({
    attributes: ["id_m", "name", "duration", "id_a"],
    where: {
      id_m: id,
    },
  });
  if (musics.length > 0) {
    musics.forEach(async (music) => {
      await music.update({
        name,
        duration,
        id_a,
      });
    });
  }

  return res.json({
    message: "Music updated successfully",
    data: musics,
  });
};

export const deleteMusic = async (req, res) => {
  const { id } = req.params;
  await Music.destroy({
    where: {
      id_m: id,
    },
  });
  res.json({
    message: "Music deleted successfully",
  });
};