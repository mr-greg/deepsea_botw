// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalResetStyle } from "./assets/styles/cssReset";
import Home from "./Home";

function App() {
  return (
    <>
      <GlobalResetStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
