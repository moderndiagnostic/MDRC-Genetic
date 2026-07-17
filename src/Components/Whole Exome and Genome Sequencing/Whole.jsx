import React from "react";

const Whole = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827914/vite-project/a3o50bmpszspuwsyemdj.svg"
            alt="Whole Exome and Genome Sequencing"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop Heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Whole Exome and Genome Sequencing
          </h2>

          {/* Sub Heading */}
          <p className="font-bold text-white md:text-gray-700 mb-4 mt-3">
            Comprehensive Analysis of Coding and Non Coding Regions
          </p>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Whole exome and genome sequencing enables high resolution
            analysis of genetic variation across coding regions and the
            entire genome. These techniques detect single nucleotide
            variants, insertions, deletions, and structural alterations
            associated with inherited and complex disorders. Advanced
            bioinformatics interpretation supports accurate variant
            classification, facilitating precise diagnosis, clinical
            correlation, and personalized management in genetically
            heterogeneous conditions.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Whole;