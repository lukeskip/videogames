const { User } = require("../db");
const registerController = async (req, res) => {
  const { email, password, passwordConfirm } = req.body;
  if (email && password && passwordConfirm) {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });
    if (created) {
      return res
        .status(201)
        .json({ access: true, message: "usuario creado", user });
    } else {
      return res
        .status(500)
        .json({ message: `${email} ya existe en la base de datos` });
    }
  }

  return res.status(500).json({ message: "faltan datos" });
};
module.exports = registerController;
