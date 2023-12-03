import React, { useState } from "react";

import { Link } from "react-scroll";

const PlusButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      data-dial-init
      className="fixed right-6 bottom-6 group hidden md:block"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div
        id="speed-dial-menu-default"
        className={`flex flex-col items-center ${
          isHovered ? "opacity-100" : "opacity-0"
        } mb-4 space-y-2`}
      >
        <Link
          activeClass="active"
          to="inicio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            type="button"
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-teal-900 bg-white rounded-full border border-gray-200 dark:border-teal-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-teal-50 dark:bg-teal-700 dark:hover:bg-teal-600 relative"
          >
            <p className="text-[35px] pb-3">⌂</p>
            <span className="sr-only">Share</span>
          </button>
        </Link>

        <Link
          activeClass="active"
          to="estudios"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            type="button"
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-teal-900 bg-white rounded-full border border-gray-200 dark:border-teal-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-teal-700 dark:hover:bg-teal-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 relative"
          >
            <p className="text-[30px]">✎</p>
            <span className="sr-only">Share</span>
          </button>
        </Link>
        <Link
          activeClass="active"
          to="contacto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            type="button"
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-teal-900 bg-white rounded-full border border-gray-200 dark:border-teal-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-teal-700 dark:hover:bg-teal-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400 relative"
          >
            <p className="text-[30px]">✉</p>
            <span className="sr-only">Share</span>
          </button>
        </Link>

        {/* Agrega más botones adicionales aquí */}
      </div>

      {/* Botón principal */}
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        className="flex items-center justify-center text-white bg-teal-700 rounded-full w-14 h-14 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:teal-blue-800"
      >
        <svg
          className={`w-5 h-5 transition-transform ${
            isHovered ? "rotate-45" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default PlusButton;
