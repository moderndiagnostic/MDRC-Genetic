import React from "react";

const Advance = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (6).svg"
            alt="Advanced Sequencing"
            className="w-full scale-x-[-1]"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          
          {/* Desktop Heading */}
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800">
            Advanced Sequencing
          </h2>

          {/* Desktop Sub Heading */}
          <p className="hidden md:block font-bold text-gray-700 mb-4 mt-2">
            High Resolution Genomic Analysis and Variant Detection
          </p>

          {/* Description */}
          <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-6 mt-3">
            Advanced sequencing utilizes high throughput next generation
            sequencing platforms to generate detailed genomic data with
            high sensitivity and accuracy. It enables detection of single
            nucleotide variants, insertions, deletions, copy number
            changes, and structural rearrangements across targeted regions
            or the entire genome. Robust library preparation, sequencing
            chemistry, and bioinformatics analysis support precise variant
            identification, facilitating diagnosis, risk assessment, and
            clinical decision making in complex genetic conditions.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Advance;