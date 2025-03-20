import PropTypes from "prop-types";

const AboutTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["company", "services", "team"];

  return (
    <div className="flex flex-wrap justify-center mb-12 gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === tab
              ? "bg-green-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

AboutTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default AboutTabs;
