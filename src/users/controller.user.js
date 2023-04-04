export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
};
export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({
    data: users,
  });
};
export const createUser = async (req, res) => {
  const { name } = req.body;
  try {
    let newUser = await User.create(
      {
        name,
      },
      {
        fields: ["name"],
      }
    );
    if (newUser) {
      return res.json({
        message: "User created successfully",
        data: newUser,
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

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const users = await User.findAll({
    attributes: ["id_u", "name"],
    where: {
      id_u: id,
    },
  });
  if (users.length > 0) {
    users.forEach(async (user) => {
      await user.update({
        name,
      });
    });
  }

  return res.json({
    message: "User updated successfully",
    data: users,
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.destroy({
    where: {
      id_u: id,
    },
  });
  res.json({
    message: "User deleted successfully",
    count: users,
  });
};
