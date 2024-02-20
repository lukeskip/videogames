const { User } = require("../db");
const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    return res.json({ message: "Inicio de sesión exitodo", access: true });
  }
  return res.status(500).json({ access: false, message: "faltan datos" });
};
module.exports = loginController;
