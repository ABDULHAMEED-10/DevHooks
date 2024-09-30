import PropTypes from "prop-types";
import { brandsData } from "../../../../demoData";

export default function Brand() {
  return (
    <section className="bg-white py-10 dark:bg-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">

          <p className="mt-6 text-3xl font-semibold text-gray-900 text-center flex justify-center items-center md:text-4xl lg:text-5xl">
          Trusted by 6,600+ Clients and Companies including
            </p>
            <div className="flex items-center justify-evenly mt-8 md:mt-10 md:mb-16">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }) => {
  const { imageSrc, altText } = brand;
  return (
    <div>
      <img src={imageSrc} alt={altText} className="h-8 w-16 md:h-14 md:w-24 lg:h-20 lg:w-40" />
    </div>
  );
};


SingleImage.propTypes = {
  brand: PropTypes.object,
};




