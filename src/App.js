import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HorizontalScroll from "./components/HorizontalScroll";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar />
      <HorizontalScroll />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
