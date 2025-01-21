// eslint-disable-next-line no-unused-vars
import React from "react";
import "./../../HomeComponents/Home.css";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const services = [
    "Web Development",
    "App Development",
    "Ui/Ux Designing",
    "Graphic Designing",
    "SEO Optimization",
    "Digital Marketing",
  ];
  return (
    <div className="hero__section__wrapper h-svh py-12 lg:py-4 rounded-b-3xl lg:rounded-b-full">
      <div className="relative isolate px-4 lg:px-8 ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
        <div className="mx-auto min-w-5xl py-28 sm:py-32 lg:py-44">
          <div className="mb-16 lg:mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-2 text-md leading-6 font-medium text-green-700 bg-green-300 ring-1 ring-green-300">
              Delivering The Solution Over The Globe.{""}
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-8xl">
              We Tackle Every Nech{" "}
              <div className="text__gradient">
                <Typewriter
                  words={services}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1500}
                />
              </div>
            </h1>

            <p className="mt-3 text-sm leading-8 text-gray-600 md:text-lg md:mt-6">
              We are Top Agency in UK with over 600+ Satisfied Clients over the
              World.
            </p>
            <div className="mt-20 lg:mt-10 flex flex-row justify-center items-center gap-4 lg:gap-6">
              <span>
                <a
                  href="https://wa.me/+923000713825"
                  className="rounded-md bg-gray-900 px-2.5 py-3.5 lg:px-3.5 lg:py-2.5 text-md font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                >
                  Contact Now
                </a>
              </span>
              <span className="hidden lg:inline-block">OR</span>
              <span>
                <a
                  href="mailto: abdulhameed000650@gmail.com"
                  className="rounded-md ring-1 ring-green-700 px-2.5 py-3.5 lg:px-3.5 lg:py-2.5 text-md font-semibold text-green-700 hover:bg-green-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
                >
                  <i className="fa-solid fa-headset pr-2"></i>
                  Free Consultion
                </a>
              </span>
            </div>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              <i className="fa-solid fa-circle-info mr-2"></i>Get a Free
              Consultation from Our Experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
