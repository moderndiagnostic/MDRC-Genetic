import React from "react";

const features = [
  {
    title: "Absolute Molecular Accuracy",
    desc: "By sorting molecules based on their exact mass-to-charge ratios, LC-MS/MS measures multiple medications and their specific active breakdown products simultaneously with extreme sensitivity.",
  },
  {
    title: "No Cross-Reactivity",
    desc: "This technology counts the actual drug molecules in your blood, completely avoiding the antibody interference and false results common in basic laboratory screenings when patients are on multi-drug regimens.",
  },
  {
    title: "Optimized for Polypharmacy",
    desc: "Because patients are frequently prescribed a combination of neuroleptics, anti-epileptics, and other systemic medications, LC-MS/MS provides an unskewed, clear look at how these drugs are interacting and absorbing within your unique system.",
  },
];

const NeuropsychPrecision = () => (
  <section className="w-full py-10 md:py-14 bg-white font-roboto">
    <div className="max-w-5xl mx-auto px-4 text-left">
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-4">
        The Flawless Precision of LC-MS/MS Technology
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
        Conventional laboratory tracking methods often struggle with cross-reactivity or fail to distinguish between a parent drug and its active metabolites. This panel redefines neuropsychiatric diagnostics through advanced mass spectrometry:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl p-6 shadow-[0_0_10px_#e5e5e5] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 text-left"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-lg"
              style={{ background: "linear-gradient(to right, #15AEE5, #0C607F)" }}
            >
              {idx + 1}
            </div>
            <h3 className="text-lg font-semibold text-[#005C96] mb-2">{item.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NeuropsychPrecision;
