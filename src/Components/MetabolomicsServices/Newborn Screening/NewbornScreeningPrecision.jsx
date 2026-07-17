import React from "react";

const features = [
  {
    title: "High-Density Multiplexing",
    desc: "MS/MS scans dozens of metabolic markers simultaneously from a single, stable drop of dried blood, ensuring rapid turnaround times when hours matter most.",
  },
  {
    title: "Extreme Sensitivity",
    desc: "By sorting molecules based on precise mass-to-charge ratios, MS/MS eliminates lab guesswork and antibody interference, detecting minute biochemical deviations with absolute precision.",
  },
  {
    title: "Non-Invasive Collection",
    desc: "The Dried Blood Spot (DBS) format requires only a few drops of blood from a routine infant heel-prick, causing minimal stress to the newborn.",
  },
];

const NewbornScreeningPrecision = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-3 sm:mb-4">
          The Precision of Tandem Mass Spectrometry (MS/MS) on DBS
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          Conventional medical screening often requires large blood volumes and separate tests for separate conditions. This panel redefines early diagnostics through advanced technology:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="metab-card bg-gray-100 rounded-xl p-4 sm:p-6 shadow-[0_0_10px_#e5e5e5] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 text-left h-full"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-white font-bold text-base sm:text-lg"
                style={{ background: "linear-gradient(to right, #15AEE5, #0C607F)" }}
              >
                {idx + 1}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#005C96] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewbornScreeningPrecision;
