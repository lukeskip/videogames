const { Router } = require("express");
const getPlatforms = require("../controllers/getPlatforms");
const routerGenres = Router();

routerGenres.get("/", getPlatforms);

module.exports = routerGenres;
