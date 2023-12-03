import React from "react";

import BibliaImg from "../assets/bibliaImg.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-teal-500 h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center h-screen">
        <img className="rounded-2xl w-[500px]" src={BibliaImg} alt="" />
        <div class="text-center bg-teal-600 text-white p-5 rounded-lg shadow-lg max-w-[400px] mx-auto my-5">
          <h2 class="text-2xl font-bold mb-3">Filipenses 4:6-7</h2>
          <blockquote class="italic text-lg">
            "No se preocupen por nada; en cambio, oren por todo. Díganle a Dios
            lo que necesitan y denle gracias por todo lo que él ha hecho. Así
            experimentarán la paz de Dios, que supera todo lo que podemos
            entender. La paz de Dios cuidará su corazón y su mente mientras
            vivan en Cristo Jesús."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
