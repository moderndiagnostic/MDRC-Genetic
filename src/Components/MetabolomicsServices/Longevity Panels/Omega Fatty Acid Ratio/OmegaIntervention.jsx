import React from "react";

const interventions = [
  {
    title: "Targeted Lipid Modulation",
    desc: "Flooding your system with high-purity, targeted marine or specialized plant-based oils to systematically displace excess Omega-6s from your cell walls.",
  },
  {
    title: "Precision Nutritional Guidance",
    desc: "Identifying hidden sources of industrial seed oils and inflammatory fats in your current diet, replacing them with cellular-healing lipid alternatives.",
  },
  {
    title: "Co-Factor Optimization",
    desc: "Providing the exact vitamin and mineral co-factors (like Zinc, Magnesium, and Vitamin B6) needed to ensure your body processes these fats smoothly without hitting metabolic bottlenecks.",
  },
];

const OmegaIntervention = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-white font-roboto">
      <div className="max-w-5xl mx-auto px-4 text-left">
        <h2 className="text-2xl md:text-[28px] font-bold text-gray-800 mb-4">
          Knowledge is Power. Intervention is the Cure.
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 max-w-3xl">
          The most vital takeaway from your lipid assessment is that your fatty acid profile is entirely dynamic. Because this panel measures the actual structural composition of your cell membranes rather than fixed genetic traits, your numbers can be completely shifted and optimized.
        </p>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
          Based on your unique fatty acid snapshot, a personalized strategy can be constructed to extinguish cellular friction and restore structural harmony:
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

export default OmegaIntervention;
