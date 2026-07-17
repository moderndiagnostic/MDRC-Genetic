import React from "react";

const MicroarrayIntro = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/assets/male-doctor-looking-virtual-dna-coming-out-tablet-gray-wall 1 (7).svg"
            alt="Chromosomal Microarray Analysis"
            className="w-full scale-x-[-1]"
          />
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Advanced Genome-Wide Genetic Testing for Accurate Diagnosis
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Chromosomal Microarray Analysis (CMA) is a highly advanced DNA-based
            genetic testing technology designed to identify chromosomal
            abnormalities at a much higher resolution than conventional
            karyotyping. The test detects Copy Number Variations (CNVs),
            including microdeletions and microduplications, as well as regions
            of Loss of Heterozygosity (LOH), providing comprehensive
            genome-wide analysis.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Recognized by leading international organizations including the
            American College of Obstetricians and Gynecologists (ACOG) and the
            American College of Medical Genetics and Genomics (ACMG), CMA has
            become a first-line genetic diagnostic tool in both prenatal and
            postnatal settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MicroarrayIntro;
