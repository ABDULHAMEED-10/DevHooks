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
    <div className="hero__section__wrapper">
      <div className="relative isolate px-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-5xl py-28 sm:py-32 lg:py-44">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-2 text-md leading-6 font-medium text-green-700 bg-green-300 ring-1 ring-green-300">
              Delivering The Solution Over The Globe.{""}
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
              We Tackle Every Nech{" "}
              <div className="text__gradient">
                <Typewriter
                  words={services}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </h1>

            <p className="mt-3 text-sm leading-8 text-gray-600 md:text-lg md:mt-6">
              We are Top Agency in UK with over 600+ Satisfied Clients over the
              World.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://wa.me/+923000713825"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
              >
                Contact Now
              </a>
              <span className="text-gray-500">OR</span>
              <a
                href="#"
                className="rounded-md ring-1 ring-green-700 px-3.5 py-2.5 text-md font-semibold text-green-700 hover:bg-green-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              >
                <i className="fa-solid fa-headset pr-2"></i>
                Free Consultion
              </a>
            </div>

            <p className="mt-6 text-sm leading-8 text-gray-600">
              <i className="fa-solid fa-circle-info mr-2"></i>Get a Free
              Consultation from Our Experts.
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
