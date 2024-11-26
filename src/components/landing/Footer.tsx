/* eslint-disable @next/next/no-img-element */
import React from "react";
import { app_logo } from "../../../public/assets";

function Footer() {
  return (
    <footer className="bg-white p-4 dark:bg-gray-800 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={app_logo.src}
                className="mr-3 h-6 sm:h-9"
                alt="Emergify Logo"
              />
              <span className="text-fbprimary-700 self-center whitespace-nowrap text-2xl font-semibold">
                Emergify
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/haruna2004"
                    className="hover:underline"
                  >
                    Open Source
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/haruna2004/emergify"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" className="hover:underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* social links */}
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Emergify™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
