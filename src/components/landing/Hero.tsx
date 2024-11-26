/* eslint-disable @next/next/no-img-element */
import React from "react";
import { emergify_mockup } from "../../../public/assets";

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto mb-20 mt-10 grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl font-sans text-4xl font-semibold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Medical Emergency help that reaches everyone, everywhere
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Get instant medical guidance, find the right care facilities, and
            connect with remote experts – even in regions with limited emergency
            services
          </p>
          <a
            href="/first-aid"
            className="bg-fbprimary-700 hover:bg-fbprimary-800 focus:ring-fbprimary-300 dark:focus:ring-fbprimary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Get started
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="tel:+2348164475065"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Contact Us
          </a>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img
            src={emergify_mockup.src}
            className="h-auto w-[100%]"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
