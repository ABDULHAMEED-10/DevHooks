import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { brandsData } from "../../../../demoData";
import { Link } from "react-router-dom";
export default function Brand() {
  return (
    <section className="relative py-8 md:py-14 overflow-hidden bg-gradient-to-b from-white to-gray-0">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-10 top-10 w-72 h-72 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-4">
            <span className="relative inline-block">
              Trusted by
              <span className="text-green-600 mx-2">600+</span>
              Clients
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 3C50 0.5 150 0.5 200 3"
                  stroke="#10B981"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Industry leaders who trust our solutions and services worldwide
          </p>
        </div>

        {/* Single row marquee effect */}
        <LogoMarquee brands={brandsData} />

        {/* Call to action */}
        <Link to="/contact" className="block max-w-xs mx-auto">
          <div className="mt-10 text-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 shadow-md hover:shadow-lg">
              Become Our Partner
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}

const LogoMarquee = ({ brands }) => {
  return (
    <div className="relative overflow-hidden py-4 my-8">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

      <div className="animate-marquee flex space-x-8 whitespace-nowrap">
        {/* First set of logos */}
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 py-2 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-20 w-40"
          >
            <img
              src={brand.imageSrc || "/placeholder.svg"}
              alt={brand.altText || "Brand Logo"}
              className="h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {brands.map((brand, i) => (
          <div
            key={`dup-${i}`}
            className="flex-shrink-0 py-2 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-20 w-40"
          >
            <img
              src={brand.imageSrc || "/placeholder.svg"}
              alt={brand.altText || "Brand Logo"}
              className="h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

LogoMarquee.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      altText: PropTypes.string,
    })
  ).isRequired,
};
