import React from "react";
import { Link } from "react-router-dom";

const MetabolomicsTmsLink = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug px-2">
          Know about Tandem Mass Spectrometry (TMS)
        </h2>

        <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 max-w-3xl mx-auto px-2">
          Learn how our advanced LC-MS/MS instrumentation enables precise
          metabolite quantification for comprehensive clinical diagnostics.
        </p>

        <Link
          to="/services/tandem-mass-spectrometry-tms"
          className="inline-block w-full sm:w-auto bg-[#005C96] hover:bg-[#0C759A] text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg max-w-xs sm:max-w-none mx-auto"
        >
          Explore TMS Technology
        </Link>
      </div>
    </section>
  );
};

export default MetabolomicsTmsLink;
