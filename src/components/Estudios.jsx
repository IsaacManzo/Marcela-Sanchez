import React from "react";

const Estudios = () => {
  return (
    <div id="estudios" className="flex justify-start items-center pt-[200px] bg-teal-500 pl-10">
      <ol class="items-center sm:flex">
        <li class="relative mb-6 sm:mb-0 mt-7">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full ring-0 ring-teal-400 sm:ring-8 shrink-0">
              <svg
                class="w-2.5 h-2.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-teal-400 h-0.5 "></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-white">
              Instructorado en Educación Emocional
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white/50">
              Realizado en Diciembre 2, 2020
            </time>
            <p class="text-base font-semibold text-yellow-300/80">
              -Principios de Psicologí -Educación Emocional
            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full ring-0 ring-teal-400  sm:ring-8  shrink-0">
              <svg
                class="w-2.5 h-2.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-teal-400 h-0.5 "></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-white">
              Instructorado en Educación Emocional{" "}
              <b className="font-normal">Nivel 2</b>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white/50">
              Realizado en Diciembre 23, 2021
            </time>
            <p class="text-base font-semibold text-yellow-300/80">
            -Consejeria matrimonial -Abordaje en drogodependencia -Quitando  límites mentales

            </p>
          </div>
        </li>
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full ring-0 ring-teal-400 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg
                class="w-2.5 h-2.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div class="hidden sm:flex w-full bg-teal-400 h-0.5"></div>
          </div>
          <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-white">
              Instructorado en Educación Emocional{" "}
              <b className="font-normal">Nivel 3</b>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-white/50">
              Realizado en Diciembre 5, 2023
            </time>
            <p class="text-base font-semibold text-yellow-300/80">
            -Consejería para padres -Autoconfianza -Oratoria y manejo de público -Elaboración del duelo
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Estudios;
