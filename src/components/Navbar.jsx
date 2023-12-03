import React, { useState } from "react";

// importamos componente de navegacion
import { Link } from "react-scroll";

// import assets
import Biblia from "../assets/biblia.png";

const AdultsDropdown = () => {
  // estado boton wpp
  const [isOpen, setIsOpen] = useState();

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="inicio" className="border-gray-200 bg-teal-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src={Biblia}
            className="h-8 mr-3 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Marcela Sanchez
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 hover:dark:text-yellow-400 dark:hover:bg-teal-600 hover:dark:focus:ring-yellow-400 dark:focus:ring-white dark:text-white"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleDown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-teal-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 xl:bg-teal-600 md:border-0 lg:bg-teal-600 md:bg-teal-600 sm:bg-teal-700">
            <li>
              <a
                href="/home"
                className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0  hover:text-yellow-300 hover:bg-teal-600  md:dark:hover:bg-transparent transition-all"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <Link
              activeClass="active"
              to="presentacion"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <a
                  href="presentacion"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0  hover:text-yellow-300 hover:bg-teal-600  md:dark:hover:bg-transparent transition-all"
                >
                  Presentación
                </a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="estudios"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <a
                href="estudios"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0  hover:text-yellow-300 hover:bg-teal-600  md:dark:hover:bg-transparent transition-all"
                >
                  Estudios
                </a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li>
                <a
                href="contacto"
                  className="block py-2 pl-3 pr-4 text-white rounded  md:border-0 md:p-0  hover:text-yellow-300 hover:bg-teal-600  md:dark:hover:bg-transparent transition-all"
                >
                  Contacto
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdultsDropdown;
