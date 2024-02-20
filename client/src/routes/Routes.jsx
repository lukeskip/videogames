import {
  Routes as Router,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import CreateVideogameRoute from "./CreateVideogameRoute";

import Detail from "./Detail";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-videogame/" element={<CreateVideogameRoute />} />
    </Router>
  );
}
