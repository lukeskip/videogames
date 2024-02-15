import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./routes/Home";
import Loader from "./components/Loader";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <Loader></Loader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
