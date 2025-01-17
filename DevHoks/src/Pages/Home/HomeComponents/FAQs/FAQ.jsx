import React from "react";
import { titleParaInfo, FAQdata } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import FAQCard from "./FAQCard";

export const FAQ = () => {
  return (
    <div className="py-10">
      <div className="w-full mx-auto max-w-8xl px-4 lg:px-8 text-center mb-8">
        <TitleAndPara prop={titleParaInfo[5]} />
      </div>
      <div className="flex flex-col justify-center gap-4 lg:gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {FAQdata.map((faq, i) => (
          <FAQCard key={i} prop={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
