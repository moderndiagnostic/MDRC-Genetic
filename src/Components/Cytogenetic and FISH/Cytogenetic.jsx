import React from "react";

const Cytogenetic = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1 shrink-0">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827923/vite-project/awcj7ti3nh4dfx5nrk3t.svg"
            alt="Cytogenetic Analysis"
            className="w-full max-w-md mx-auto scale-x-[-1] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Cytogenetic and FISH
          </h2>

          <p className="font-bold text-white md:text-gray-700 mb-4 mt-2">
            Chromosomal Analysis and Targeted Molecular Detection
          </p>

          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed">
            Cytogenetic analysis evaluates chromosomal structure and number through
            karyotyping to identify aneuploidies, translocations, and structural
            rearrangements associated with genetic disorders, infertility, and
            malignancies. Fluorescence in situ hybridization enables targeted
            detection of specific DNA sequences using labeled probes, allowing
            rapid identification of microdeletions, duplications, and gene
            rearrangements. These techniques support precise diagnosis, prognostic
            assessment, and clinical decision making in both constitutional and
            acquired genetic conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cytogenetic;
