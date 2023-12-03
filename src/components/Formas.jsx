import React from "react";
import { Card } from "flowbite-react";

const Formas = () => {
  return (
    <div className="container mx-auto bg-teal-600 mt-[100px] rounded-xl shadow-xl">
      <p className="text-[30px] text-center font-bold text-yellow-300 mb-6 pt-3">
        Formas de trabajo
      </p>
      <p className="text-white text-[20px] text-center">
        Como profesional especializada, mi labor consiste en facilitar sesiones
        tanto individuales como grupales, dirigidas a personas, matrimonios,
        parejas o equipos de trabajo que requieran gestionar efectivamente sus
        emociones o resolver conflictos. Mi enfoque se centra en proporcionar un
        espacio seguro y confiable para explorar, comprender y abordar las
        dinámicas emocionales, promoviendo así el desarrollo personal y la
        armonía interpersonal.
      </p>
      <p className="text-center mt-[70px] font-bold text-[30px] mb-3 text-yellow-300">
        Tipos de sesiones
      </p>
      <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center items-center">
        <Card className="max-w-sm m-[20px] bg-teal-500 border-none hover:bg-teal-400">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            Conductual
          </h5>
          <p className="font-normal text-white text-[18px] transition-all pb-3">
            Aquí exploraremos juntos una amplia gama de temas humanos y
            generales, dejando de lado lo bíblico y lo espiritual. Mi enfoque es
            práctico, diseñado para impulsar su comprensión y desarrollo
            personal. Trabajaremos juntos para cultivar habilidades esenciales
            para la vida cotidiana y lograr un crecimiento significativo.
          </p>
        </Card>
        <Card className="max-w-sm m-[20px] bg-teal-500 border-none hover:bg-teal-400">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            Diseño biblico
          </h5>
          <p className="font-normal text-white text-[18px] pb-3">
            En mis sesiones con diseño bíblico, fusiono principios bíblicos con
            temas humanos para brindar una perspectiva única y enriquecedora. No
            solo exploraremos cuestiones bíblicas, sino que también conectaremos
            la sabiduría bíblica con su vida diaria. Únanse a mí en este viaje
            de crecimiento espiritual y comprensión profunda.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Formas;
