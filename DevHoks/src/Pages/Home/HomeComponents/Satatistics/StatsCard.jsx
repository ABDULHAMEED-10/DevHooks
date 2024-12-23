import CountUp from "react-countup";
import proptypes from "prop-types";
export const StatsCard = ({ prop }) => {
  return (
    <div className="block">
      <div className="font-bold text-4xl text-green-600 mb-3 flex justify-center text-center lg:text-left">
        <CountUp
          start={prop.start}
          end={prop.end}
          enableScrollSpy
          scrollSpyOnce
          duration={2}
        />
        <span className="text-4xl">+</span>
      </div>
      <span className="text-gray-900 text-center block lg:text-left">
        {prop.title}
      </span>
    </div>
  );
};

StatsCard.propTypes = {
  prop: proptypes.object.isRequired,
};

export default StatsCard;
