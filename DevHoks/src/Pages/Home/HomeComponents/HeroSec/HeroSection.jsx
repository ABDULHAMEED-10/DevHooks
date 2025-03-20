import React from "react";
import "./../../HomeComponents/Home.css";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const services = [
    "Web Development",
    "App Development",
    "UI/UX Designing",
    "Graphic Designing",
    "E-Commerce",
    "SEO Optimization",
    "Data Science",
  ];

  return (
    <div className="hero__section__wrapper py-8 py-10 rounded-b-3xl lg:rounded-b-[100px] bg-gradient-to-b from-green-100 to-white relative overflow-hidden mt-20 md:mt-10 lg:mt-0">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-green-200 opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-40 h-40 md:w-80 md:h-80 rounded-full bg-green-200 opacity-40 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-green-200 opacity-50 animate-bounce-slow"></div>
      </div>

      <div className="relative isolate px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-5xl py-12 sm:py-20 md:py-24 lg:py-32">
          <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
            <div className="relative rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium text-green-800 bg-green-200 ring-2 ring-green-400 shadow-sm transform hover:scale-105 transition-transform duration-300">
              <span className="hidden sm:inline">✨</span> Delivering The
              Solution Over The Globe{" "}
              <span className="hidden sm:inline">✨</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
              We Tackle Every Niche{" "}
              <div className="text__gradient w-full py-2 sm:py-3 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem] flex items-center justify-center">
                <Typewriter
                  words={services}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1500}
                  className="custom-cursor"
                />
              </div>
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We are a Top Agency in UK with over 60+ Satisfied Clients across
              the World.
            </p>

            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center ">
              <a
                href="https://wa.me/+923000713825"
                className="w-auto rounded-md bg-gray-900 mx-3 lg:mx-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-base font-semibold text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Now
              </a>

              <span className="py-2 text-gray-400 sm:py-0">OR</span>

              <a
                href="https://calendly.com/abdulhameed000650/30min"
                className="w-auto rounded-md ring-1 ring-green-700 mx-3 lg:mx-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base md:text-base font-semibold text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
                Free Consultation
              </a>
            </div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Get a Free Consultation from Our Experts
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          className="relative block w-full h-12 sm:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
