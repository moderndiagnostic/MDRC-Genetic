import React from "react";

const interventions = [
  {
    title: "Precision Nutrient Repletion",
    desc: "Utilizing highly bioavailable, targeted co-factor forms (such as active B-vitamins, Choline, or Betaine) to bypass genetic bottlenecks and safely clear high homocysteine lines.",
  },
  {
    title: "Redox Shield Optimization",
    desc: "Flooding the cellular environment with precise antioxidant support to protect delicate methylation enzymes from free radical inactivation.",
  },
  {
    title: "Targeted Metabolic Support",
    desc: "Providing specific upstream amino acid inputs to naturally boost baseline SAM production and revive a sluggish SAM/SAH recycling ratio.",
  },
];

const MethylationIntervention = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 text-left">
        <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-4">
          Knowledge is Power. Intervention is the Cure.
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          The most vital takeaway from this comprehensive assessment is that your methylation cycle is entirely dynamic. Because this panel measures active cellular metabolites, functional co-factors, and pathway outputs rather than fixed genetic traits, your results can be systematically shifted and optimized.
        </p>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          Based on your unique snapshot, a personalized strategy can be constructed to lower internal friction and restore biochemical balance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interventions.map((item, idx) => (
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
              <h3 className="text-lg font-semibold text-[#005C96] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethylationIntervention;
