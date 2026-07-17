import React from "react";

const DiseaseSpectrumofInfectiousDiseases = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827923/vite-project/awcj7ti3nh4dfx5nrk3t.svg"
            alt="Infectious Disease"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop only heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Etiological Diversity and Laboratory Diagnosis
          </h2>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6 mt-3">
            MDRC provides comprehensive laboratory evaluation for a wide range of infectious diseases caused by viruses, bacteria, fungi, and parasites. Our advanced diagnostic platforms ensure accurate pathogen detection, supporting timely clinical intervention and effective infection control. We have introduced the latest NGS platform for detection of any viral, bacterial or gungal disease which is highly useful and life saving test in ICU setting as it does not miss any infective agent.
          </p>

        </div>

      </div>
    </section>
  );
};

export default DiseaseSpectrumofInfectiousDiseases;