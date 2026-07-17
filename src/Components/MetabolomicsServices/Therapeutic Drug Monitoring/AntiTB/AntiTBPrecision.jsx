import React from "react";

const features = [
  {
    title: "Absolute Molecular Accuracy",
    desc: "By sorting molecules based on their exact mass-to-charge ratios, LC-MS/MS measures all four first-line drugs simultaneously with extreme sensitivity, completely avoiding cross-reactivity between the medications.",
  },
  {
    title: "True Quantification",
    desc: "This technology counts the actual drug molecules in your blood, eliminating the antibody interference and false results common in basic laboratory screenings.",
  },
  {
    title: "Optimized for Indian Protocols",
    desc: "Given the high burden of tuberculosis and the widespread use of Fixed-Dose Combinations (FDCs) in India, LC-MS/MS provides the definitive metric to ensure that these combined pills are safely and effectively absorbing into your unique system.",
  },
];

const AntiTBPrecision = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-3 sm:mb-4">
          The Flawless Precision of LC-MS/MS Technology
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          Conventional laboratory tracking methods cannot provide the extreme accuracy required to manage a complex, multi-drug regimen. This panel redefines therapeutic drug monitoring through advanced mass spectrometry:
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
              <h3 className="text-base sm:text-lg font-semibold text-[#005C96] mb-2 leading-snug">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntiTBPrecision;
