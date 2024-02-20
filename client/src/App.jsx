import { useState } from "react";

import Routes from "../src/routes/Routes";

function App() {
  localStorage.clear();
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
