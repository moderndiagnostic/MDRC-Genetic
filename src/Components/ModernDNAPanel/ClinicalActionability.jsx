import React from "react";

const ClinicalActionability = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4">
          Clinical Actionability
        </h2>

        <p className="text-white md:text-gray-600 text-base md:text-lg leading-snug md:leading-tight max-w-5xl mx-auto">
          Reports generate clear risk stratifications alongside evidence-based dietary, lifestyle, or clinical monitoring suggestions. Clinicians can use these insights to tailor screening frequencies (e.g., earlier cardiovascular screening) or customize therapeutic interventions for maximum efficacy.
        </p>
      </div>
    </section>
  );
};

export default ClinicalActionability;
