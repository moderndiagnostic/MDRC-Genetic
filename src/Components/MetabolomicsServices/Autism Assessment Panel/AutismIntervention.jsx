import React from "react";

const interventions = [
  {
    title: "Precision Nutritional Shields",
    desc: "Supplementing with bioavailable co-factor forms (like 5-MTHF and active B12) to bypass genetic roadblocks and restore your methylation cycles.",
  },
  {
    title: "Mitochondrial Support Protocols",
    desc: "Utilizing specific Krebs cycle intermediates and targeted antioxidants to clear cellular energy blocks and boost physical stamina.",
  },
  {
    title: "Microbiome and Brain-Axis Cooling",
    desc: "Implementing specific dietary modifications and barrier supports to stop toxic gut metabolites from crossing into circulation and overstimulating the nervous system.",
  },
];

const AutismIntervention = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-3 sm:mb-4">
          Knowledge is Power. Intervention is the Cure.
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 max-w-3xl mx-auto sm:mx-0">
          The most vital takeaway from this comprehensive evaluation is that these metabolic and chemical markers are entirely dynamic. Because this panel measures active cellular functions, nutrient levels, and pathway outputs rather than fixed genetic traits, your results can be systematically shifted and optimized.
        </p>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          Based on your unique neuro-metabolic snapshot, a personalized strategy can be constructed to lower internal friction and restore biochemical balance:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {interventions.map((item, idx) => (
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

export default AutismIntervention;
