const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routerVideogames = require("./routes/routerVideogames");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencode({ extended: true, limit: "50mb" }));
server.use(bodyparser.json({ limit: "50mb" }));
server.use(cooieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.deader("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methos",
    "GET",
    "POST",
    "OPTIONS",
    "PUT",
    "DELETE"
  );
  next();
});

server.use("/videogames", routerVideogames);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(messge);
});

module.exports = server;
