// eslint-disable-next-line no-unused-vars
import React from "react";
import "./../../HomeComponents/Home.css";
import { Typewriter } from "react-simple-typewriter";
// import image1 from "./../../../../assets/baner-1-1.png";
// import image2 from "./../../../../assets/baner-1-2.png";
// import image3 from "./../../../../assets/baner-1-3.png";

const HeroSection = () => {
  let services = [
    "Web Development",
    "App Development",
    "Ui/Ux Designing",
    "Graphic Designing",
    "E-Commerce",
    "SEO Optimization",
    "Data Science",
  ];
  // services = services.map((service) => service.toUpperCase());
  return (
    <div className="hero__section__wrapper py-12 lg:py-4 rounded-b-3xl lg:rounded-b-full">
      <div className="relative isolate px-4 lg:px-8 ">
        {/* <img
          src={image2}
          alt="hero"
          className="absolute animate-bounce-slow z-10 w-56 top-36 left-0 filter-green-700 "
        />
        <img
          src={image1}
          alt="hero"
          className="absolute animate-bounce-right-left-slow w-24 top-52 left-40 z-20 filter-green-700"
        />
        <img
          src={image3}
          alt="hero"
          className="absolute animate-bounce-slow w-96 top-52 right-0 -z-20 filter-green-700"
        /> */}
        <div className="mx-auto min-w-5xl py-28 sm:py-32 lg:py-44">
          <div className="mb-16 lg:mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-2 text-md leading-6 font-medium text-green-700 bg-green-300 ring-1 ring-green-300">
              Delivering The Solution Over The Globe.{""}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-8xl ">
              We Tackle Every Niche{" "}
              <div className="text__gradient w-full py-3">
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

            <p className="mt-3 text-sm leading-8 text-gray-600 md:text-lg md:mt-6">
              We are Top Agency in UK with over 60+ Satisfied Clients over the
              World.
            </p>
            <div className="mt-20 lg:mt-10 flex flex-row justify-center items-center gap-4 lg:gap-6">
              <span className="hover:scale-105 transition duration-300">
                <a
                  href="https://wa.me/+923000713825"
                  className="rounded-md bg-gray-900 px-2.5 py-3.5 lg:px-3.5 lg:py-2.5 text-md font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 "
                >
                  Contact Now
                </a>
              </span>
              <span className="hidden lg:inline-block">OR</span>
              <span className="hover:scale-105 transition duration-300">
                <a
                  href="https://calendly.com/abdulhameed000650/30min"
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
