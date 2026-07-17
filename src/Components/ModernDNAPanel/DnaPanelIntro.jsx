import React from "react";

const DnaPanelIntro = () => {
  return (
    <section className="w-full py-5 sm:py-7 md:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-4 md:gap-10">
        {/* TEXT */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 md:mb-4">
            Molecular Genetics &amp; Preventative Genomics
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
            Standard biochemical health checks capture a single point in time,
            showing current organ and metabolic function. Genomic testing,
            however, identifies inherited variations that predispose individuals
            to specific health trajectories.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
            At Modern Diagnostic &amp; Research Centre (MDRC), our Modern DNA
            Panels offer a detailed evaluation of your genetic baseline. These
            advanced molecular assessments assist both patients and clinicians
            in creating target-oriented, preventative healthcare strategies
            tailored to individual genetic profiles.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (6).svg"
            alt="Modern DNA Panels"
            className="mx-auto w-full max-w-sm md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default DnaPanelIntro;
