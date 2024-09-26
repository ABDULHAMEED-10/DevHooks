import "./../Home.css";
import { reviewsData } from "../../../../demoData";
import CaurosalCard from "./CaurosalCard";

export const Caurosel = () => {
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center ">
      <div className="w-full px-5 py-16 md:py-24 text-gray-800">
        <div>
          <div className="text-center w-full max-w-6xl mx-auto">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
                Reviews of happy clients
              </div>
            </div>
            <h1 className="text-6xl md:text-6xl font-bold mb-5 text-gray-900">
              What people are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              See why people like you choose Devhoks
            </h3>
           
          </div>
          
          <div >
            <div >
              {reviewsData.map((review, i) => (
                <CaurosalCard key={i} prop={review} />
              ))}

            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Caurosel;
