import React from "react";

const Rare = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827918/vite-project/ovi3frrn2t8v0celpjox.svg"
            alt="Rare NGS Panel"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop Heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Rare Diseases NGS panel
          </h2>

          {/* Subheading */}
          <p className="font-bold text-white md:text-gray-700 mb-4 mt-2">
            Comprehensive Genomic Profiling for Rare Disorders
          </p>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Infectious disease diagnostics involves identification of bacterial, viral, fungal, and parasitic pathogens using microbiological culture, serological assays, and molecular techniques. Advanced methods such as PCR and antigen detection enable rapid and accurate detection of pathogens and antimicrobial resistance markers. Timely diagnosis supports targeted therapy, infection control, and effective clinical management, improving patient outcomes and reducing transmission risk.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Rare;