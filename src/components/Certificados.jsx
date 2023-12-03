import React from "react";

import { Carousel } from "flowbite-react";

import certificadoUno from "../assets/certificado1.png";
import certificadoDos from "../assets/certificado2.png";
import certificadoTres from "../assets/certificado3.png";
import certificadoCuatro from "../assets/certificado4.png";
import certificadoCinco from "../assets/certificado5.png";

const Certificados = () => {
  return (
    <div className="bg-teal-500 pt-[120px] pb-[120px]">
      <div className="container mx-auto lg:h-[700px] lg:w-[1000px] md:h-[550px] md:w-[1000px] sm:h-[455px] sm:w-[900px] h-[500px]  w-[350px] scale-90">
        <Carousel className="rounded-xl">
          <img className="rounded-2xl" alt="..." src={certificadoUno} />
          <img className="rounded-2xl" alt="..." src={certificadoDos} />
          <img className="rounded-2xl" alt="..." src={certificadoTres} />
          <img className="rounded-2xl" alt="..." src={certificadoCuatro} />
          <img className="rounded-2xl" alt="..." src={certificadoCinco} />
        </Carousel>
      </div>
    </div>
  );
};

export default Certificados;
