const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routerVideogames = require("./routes/routerVideogames");
const routerGenres = require("./routes/routerGenres");
const routerPlatforms = require("./routes/routerPlatforms");
const registerController = require("../src/controllers/registerController");
const loginController = require("../src/controllers/loginController");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));

server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/videogames", routerVideogames);
server.use("/genres", routerGenres);
server.use("/platforms", routerPlatforms);

server.post("/login", loginController);
server.post("/register", registerController);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

module.exports = server;
