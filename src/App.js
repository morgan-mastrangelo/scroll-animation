import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Contact />
    </>
  );
}

export default App;