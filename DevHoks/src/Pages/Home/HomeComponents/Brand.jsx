import PropTypes from "prop-types";
import { brandsData } from "../../../demoData";

export default function Brand() {
  return (
    <section className="bg-white pt-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
          <p className="mt-6 text-3xl leading-8 font-bold text-gray-900 flex justify-center items-center">
          Trusted by 6,600+ Clients and Companies including
            </p>
            <div className="flex flex-wrap items-center justify-center">
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
  const { link, imageSrc, lightImageSrc, altText } = brand;
  return (
    <>
      
      <a
        href={link}
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
        <img
          src={lightImageSrc}
          alt={altText}
          className="hidden h-25 w-full dark:block"
        />
      </a>
    </>
  );
};


SingleImage.propTypes = {
  brand: PropTypes.shape({
    link: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    lightImageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }).isRequired,
};

Brand.propTypes = {
  brandsData: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      lightImageSrc: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

