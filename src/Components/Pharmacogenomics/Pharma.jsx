import React from "react";

const Pharma = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827908/vite-project/xcpewrot0pfgjis2jc6n.svg"
            alt="Pharmacogenomics"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop Heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Pharmacogenomics
          </h2>

          {/* Sub Heading */}
          <p className="font-bold text-white md:text-gray-700 mb-4 mt-3">
            Genetic Determinants of Drug Response
          </p>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Pharmacogenomics evaluates genetic variants influencing
            drug metabolism, transport, and target response. Analysis
            of genes such as CYP450 enzymes enables prediction of
            therapeutic efficacy, adverse drug reactions, and dose
            requirements. Integration of genomic data into clinical
            practice supports individualized therapy selection,
            optimizes treatment outcomes, and reduces the risk of
            toxicity across diverse therapeutic areas.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Pharma;