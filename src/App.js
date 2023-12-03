import React from "react";

// importamos componentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PlusButton from "./components/PlusButton";
import Certificados from "./components/Certificados";
import Video from "./components/Video";
import Estudios from "./components/Estudios";
import Footer from "./components/Footer"
import Formas from "./components/Formas"

const App = () => {
  return (
    <div className="bg-teal-500">
      <Navbar />
      <PlusButton />
      <Hero />
      <Formas />
      <About />
      <Video />
      <Estudios />
      <Certificados />
      <Footer />
    </div>
  );
};

export default App;
