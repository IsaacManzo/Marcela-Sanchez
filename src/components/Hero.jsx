import React from "react";
import Fade from "react-reveal/Fade";

// imagen hero
import HeroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-screen flex items-start bg-teal-500 lg:bg-cover lg:bg-center lg:bo-repeat py-32 white overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-start h-full ">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start mb-0">
            <Fade left>
              <h1 className="text-5xl text-center xl:text-start lg:text-start md:text-center mt-0 mb-[50px] leading-[44px] font-bold text-white">
                Trazando Caminos de Sanidad: Volviendo al verdadero diseño
              </h1>
            </Fade>
            <Fade left>
              <p className="pt-4 pb-8 md:pt-6 mb:pb-12 max-w-[480px] text-lg text-center lg:text-left sm:text-xl text-white/50">
                Soy Marcela, instructora en educacion emocional comprometida en
                brindar terapia integral con valores cristianos para sanar
                corazones y fortalecer almas.
              </p>
            </Fade>
            <div className="flex justify-start"></div>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-center scale-110 h-full">
            <Fade right>
              <img className="rounded-2xl" src={HeroImg} alt="" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
