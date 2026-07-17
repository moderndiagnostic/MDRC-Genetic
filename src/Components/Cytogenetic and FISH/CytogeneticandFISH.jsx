import React from "react";
import Cytogenetic from "./Cytogenetic";
import Services from "./Services";
import CytogeneticFAQ from "./CytogeneticFAQ";

const CytogeneticandFISH = () => {
  return (
    <div className="font-roboto">
      <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-white text-center md:text-left w-full md:w-1/2">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center md:justify-start gap-2 text-xl mb-4"
            >
              ← Back to Home
            </button>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Cytogenetic and FISH
            </h1>
          </div>

          <div className="relative flex justify-center items-center w-full md:w-auto py-4 md:py-0">
            <div className="overflow-hidden relative z-10">
              <img
                src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828041/vite-project/jxvsy6r0rpqb403qlm6v.svg"
                alt="Cytogenetic and FISH"
                className="rounded-full w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] object-cover mx-auto"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl pointer-events-none" />
          </div>
        </div>
      </section>

      <Cytogenetic />
      <Services />
      <CytogeneticFAQ />
    </div>
  );
};

export default CytogeneticandFISH;
