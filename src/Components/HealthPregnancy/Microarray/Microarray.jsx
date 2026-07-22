import React from "react";
import MicroarrayIntro from "./MicroarrayIntro";
import MicroarrayInfoSection from "./MicroarrayInfoSection";
import MicroarrayComparison from "./MicroarrayComparison";
import MicroarrayWhyChoose from "./MicroarrayWhyChoose";
import MicroarrayFAQ from "./MicroarrayFAQ";

const Microarray = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
            <div className="text-white text-center md:text-left w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              <span className="block">Chromosomal Microarray</span>
              <span className="block">Analysis (CMA)</span>
            </h1>
            </div>

            <div className="relative flex justify-center items-center w-full md:w-auto py-4 sm:py-6">
              <div className="overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828054/vite-project/x37csmszlwzms69b44yo.svg"
                  alt="Chromosomal Microarray Analysis"
                  className="rounded-full mt-0 lg:mt-0 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl pointer-events-none" />
            </div>
          </div>
        </section>

        <MicroarrayIntro />
      </div>

      <MicroarrayInfoSection />
      <MicroarrayComparison />
      <MicroarrayWhyChoose />
      <MicroarrayFAQ />
    </>
  );
};

export default Microarray;
