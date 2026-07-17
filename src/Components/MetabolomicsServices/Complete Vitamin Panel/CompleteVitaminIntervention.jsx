import React from "react";

const interventions = [
  {
    title: "Precision Micronutrient Repletion",
    desc: "Utilizing highly bioavailable, co-enzyme vitamin forms to bypass metabolic bottlenecks and rapidly restore cellular levels.",
  },
  {
    title: "Targeted Dietary Adjustments",
    desc: "Tailoring your food intake to emphasize nutrient-dense, structurally compatible whole foods that align with your body's specific deficiencies.",
  },
  {
    title: "Absorption Optimization",
    desc: "Addressing underlying digestive or gut barrier factors to ensure your body efficiently breaks down, absorbs, and utilizes the vitamins you consume.",
  },
];

const CompleteVitaminIntervention = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-3 sm:mb-4">
          Knowledge is Power. Intervention is the Cure.
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 max-w-3xl mx-auto sm:mx-0">
          The most vital takeaway from this comprehensive vitamin assessment is that your micronutrient status is entirely dynamic. Because this panel measures active circulating levels and functional co-factors rather than fixed genetic traits, your results can be systematically shifted and optimized. Deficiencies or sub-optimal levels are a clear call to action, not a permanent state.
        </p>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 max-w-3xl mx-auto sm:mx-0">
          Based on your unique snapshot, a personalized strategy can be constructed to optimize your nutrient foundations:
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

export default CompleteVitaminIntervention;
