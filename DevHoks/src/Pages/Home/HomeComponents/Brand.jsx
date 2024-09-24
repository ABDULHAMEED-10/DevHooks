import PropTypes from "prop-types";
import { brandsData } from "../../../demoData";

export default function Brand() {
  return (
    <section className="bg-white pt-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
          <p className="mt-6 text-2xl leading-8 font-semibold text-gray-900 flex justify-center items-center">
          Trusted by 6,600+ Clients and Companies including
            </p>
            <div className="flex items-center justify-center">
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
    <>
      <div
       
        className="mx-10 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img src={imageSrc} alt={altText} className="h-15 w-full" />
      </div>
    </>
  );
};


SingleImage.propTypes = {
  brand: PropTypes.shape({
    
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }).isRequired,
};

Brand.propTypes = {
  brandsData: PropTypes.arrayOf(
    PropTypes.shape({
      
      imageSrc: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

