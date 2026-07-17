import React from "react";

const features = [
  {
    title: "Elimination of Cross-Reactivity",
    desc: "Standard immunoassay tests use antibodies that often mistake inactive vitamin breakdown products (metabolites) for active hormone reserves. LC-MS/MS counts the actual molecules, giving you a true, unskewed measurement.",
  },
  {
    title: "Molecular Accuracy",
    desc: "By sorting molecules based on mass-to-charge ratios, LC-MS/MS achieves an unparalleled level of sensitivity. It can detect even minute changes in your blood levels that standard tests completely miss.",
  },
];

const VitaminDPrecision = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-3 sm:mb-4">
          The Absolute Precision of LC-MS/MS Technology
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          Unlike basic laboratory screenings that lump your results into a single generic number based on imprecise chemical bindings, this panel utilizes advanced mass spectrometry to isolate and quantify the exact fractions of your active and storage pathways:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

export default VitaminDPrecision;
