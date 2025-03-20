import { useState } from "react";
import AboutHeader from "./AboutHeader";
import AboutTabs from "./AboutTabs";
import CompanyTab from "./CompanyTab";
import ServicesTab from "./ServicesTab";
import TeamTab from "./TeamTab";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <section
      className="py-20 my-10 bg-gradient-to-b overflow-hidden"
      id="about"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <AboutHeader />

        {/* Tabs navigation */}
        <AboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab content */}
        {activeTab === "company" && <CompanyTab />}
        {activeTab === "services" && <ServicesTab />}
        {activeTab === "team" && <TeamTab />}
      </div>
    </section>
  );
};

export default AboutSection;
