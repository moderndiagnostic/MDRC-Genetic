import React from "react";

const features = [
  {
    title: "Absolute Molecular Accuracy",
    desc: "By sorting molecules based on their exact mass-to-charge ratios, LC-MS/MS measures the active Methotrexate molecule directly, completely avoiding cross-reactivity with inactive metabolites or other co-administered drugs.",
  },
  {
    title: "Extreme Sensitivity",
    desc: "This technology can safely detect minute, trace levels of the drug down to ultra-low concentrations (below 0.05 µmol/L). This extreme precision is mandatory to confirm that the drug has been safely and completely cleared from your system before you can be discharged.",
  },
  {
    title: "Unskewed Data Output",
    desc: "LC-MS/MS counts the actual drug molecules in your blood, eliminating antibody interference and providing your clinical team with flawless, dependable numbers when every hour counts.",
  },
];

const MethotrexatePrecision = () => (
  <section className="w-full py-10 md:py-14 bg-white font-roboto">
    <div className="max-w-5xl mx-auto px-4 text-left">
      <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-4">
        The Flawless Precision of LC-MS/MS Technology
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
        Conventional laboratory tracking methods (such as standard immunoassays) frequently suffer from cross-reactivity. They often mistake inactive or delayed Methotrexate metabolites (such as 7-hydroxymethotrexate) for the active drug, leading to false overestimations that can misguide your treatment. This panel redefines therapeutic drug monitoring through advanced mass spectrometry:
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

export default MethotrexatePrecision;
