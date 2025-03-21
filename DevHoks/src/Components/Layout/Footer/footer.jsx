/* eslint-disable no-unused-vars */
import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="">
      <div className="bg-gray-100 dark:bg-gray-900 pt-48 mt-36 lg:p-16 md:pt-36 ">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-20">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="text-teal-600 dark:text-teal-300 lg:flex flex gap-2 items-center lg:items-center lg:justify-start lg:gap-3  ">
                <img className="rounded-full w-9 h-9" src="/logo.png"></img>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Rixon
                </h2>
              </div>
              <ul className="col-span-2 flex justify-start gap-2 lg:col-span-5 lg:justify-start ">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61569390263675&mibextid=ZbWKwL"
                    rel="noreferrer"
                    target="_blank"
                    className="text-green-600 transition hover:opacity-75 "
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/devhooks.tech"
                    rel="noreferrer"
                    target="_blank"
                    className="text-green-600 transition hover:opacity-75 "
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/devhooks.tech"
                    rel="noreferrer"
                    target="_blank"
                    className="text-green-600 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/devhoks/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-green-600 transition hover:opacity-75"
                  >
                    <span className="sr-only">LinkedIn</span>

                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.32-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.6h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v6.44z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>

              <h1 className="text-gray-400 dark:text-gray-500 ">© Rixon.</h1>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-8 lg:mt-0 lg:grid-cols-5 ">
              <div className="col-span-2 "></div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                {/* <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    {" "}
                    Email{" "}
                  </label>

                  <div className="border border-gray-100 p-2 sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="username@gmail.com"
                      className="w-full border focus:border-gray-100 focus:ring-gray-100 sm:text-sm bg-gray-100 dark:bg-gray-900 dark:text-white"
                    />

                    <button className="mt-1 w-full bg-green-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-green-800 sm:mt-0 sm:w-auto sm:shrink-0">
                      Sign Up
                    </button>
                  </div>
                </form> */}
              </div>

              <div className="col-span-1 lg:col-span-2">
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/service/webDevelopment"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/service/mobileDevelopment"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      App Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/service/uiux"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Ui/Ux Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/graphicDesigning"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Graphic Designing
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/service/seo"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      SEO Optimisation
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/service/dataScience"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service/Ecommerce"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Ecommerce
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <p className="font-medium text-gray-900 dark:text-white">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Our Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#reviews"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1 mt-8 lg:mt-0">
                <p className="font-medium text-gray-900 dark:text-white">
                  Helpful Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accessibility
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Returns Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </div> */}

              {/* <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Downloads
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Marketing Calendar
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    SEO Infographics
                  </a>
                </li>
              </ul>
            </div> */}
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy; {currentYear}. Rixon. All rights reserved.
              </p>
              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <Link
                    to="/rules/terms"
                    className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/rules/privacy"
                    className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/rules/cookies"
                    className="text-gray-500 transition hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
