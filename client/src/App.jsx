import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./routes/Home";
import Loader from "./components/Loader";
import Detail from "./routes/Detail";
import CreateVideogameRoute from "./routes/CreateVideogameRoute";

function App() {
  return (
    <>
      <Loader></Loader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create-videogame/" element={<CreateVideogameRoute />} />
      </Routes>
    </>
  );
}

export default App;
