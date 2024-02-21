const { Platform } = require("../db");
const getPlatforms = async (req, res) => {
  try {
    const platforms = await Platform.findAll();
    if (platforms.length) {
      return res.json(platforms);
    }

    return res
      .status(404)
      .json({ message: "No se encontró ninguna plataforma" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getPlatforms;
