import React from "react";
//

const Footer = () => {
  return (
    <footer id="contacto" className="bg-teal-600">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between flex-col md:flex-row">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <span className="text-2xl font-semibold text-white block">
                Contactame y reserva tu turno
              </span>
            </div>
            <div className="text-white/70">
              <p className="mb-4">
                Trabajo de lunes a viernes <br /> y mis horarios son de 19:00pm
                a 22:00pm
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="mb-4">
              <h2 className="mb-2 text-sm font-semibold text-white uppercase">
                Email
              </h2>
              <ul className="text-yellow-300 font-normal">
                <li>marce20053@hotmail.com</li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-sm font-semibold text-white uppercase">
                Whatsapp
              </h2>
              <ul className="text-yellow-300 font-normal">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    +54 9 2262 57-2538
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-sm font-semibold text-white uppercase">
                Ubicación
              </h2>
              <ul className="text-yellow-300 font-normal">
                <li>
                  <a className="hover:underline">Necochea / calle 71 1165</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center text-center">
          <span className="text-md text-white/80">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Programado por Isaac Manzo
            </a>
            <br />
            Whatsapp: 2262 408165 | Email: isaacemanzo51@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
