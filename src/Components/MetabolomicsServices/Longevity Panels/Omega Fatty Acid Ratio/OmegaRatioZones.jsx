import React from "react";

const zones = [
  {
    title: "The Ancestral Target (1:1 to 4:1) – The Optimal Zone",
    desc: "This ratio mirrors the genetic blueprint of early humans. In this zone, cellular friction is minimized. Your cell membranes remain highly fluid, allowing for seamless nutrient transport, rapid exercise recovery, optimized cardiovascular defence, and a perfectly balanced immune response.",
  },
  {
    title: "The Moderate Friction Zone (5:1 to 10:1) – The Warning Sign",
    desc: "This score indicates that your modern dietary footprint is beginning to outpace your body's defences. The systemic inflammatory switch is partially stuck \"on,\" which can manifest as persistent joint stiffness, slow recovery times, mild metabolic sluggishness, and early-stage cardiovascular strain.",
  },
  {
    title: "The High Cellular Friction Zone (>15:1) – The Critical Call to Action",
    desc: "This severe imbalance reflects a typical modern industrial diet dominated by processed seed oils. At this level, excess Omega-6 fats physically crowd out Omega-3s within your cell walls, forcing membranes to become rigid and unyielding. This severe imbalance fuels chronic, low-grade structural inflammation (\"inflammaging\"), leaving blood vessels, neurological pathways, and cellular powerhouses under continuous metabolic stress.",
  },
];

const OmegaRatioZones = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-[#0C759A] to-[#005E91] md:bg-none font-roboto">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white md:text-gray-800 text-center md:text-left mb-4">
          The Omega-6 to Omega-3 Ratio
        </h2>

        <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
          While measuring individual fatty acids provides valuable data, the single most critical, actionable metric on your report is a calculated value: The Total Omega-6 to Omega-3 Ratio.
        </p>

        <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
          This score is calculated by dividing your total pro-inflammatory Omega-6 lipids (Linoleic Acid + GLA + DGLA + Arachidonic Acid) by your total anti-inflammatory Omega-3 lipids (ALA + EPA + DPA + DHA). Rather than evaluating these fats in isolation, this calculated ratio reveals the overarching biochemical environment of your cell membranes. It functions as a direct mathematical predictor of your body's systemic inflammatory potential and cellular friction.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-white md:text-gray-800 text-center md:text-left mt-8 mb-3">
          Is Your Modern Diet Driving Cellular Friction?
        </h3>

        <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
          Your body requires a balanced intake of fats to handle everyday stress, repair micro-tears, and resolve inflammation.
        </p>

        <p className="text-white md:text-gray-600 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left">
          Evolutionary diets maintained an ideal 1:1 to 4:1 ratio between Omega-6 and Omega-3 fatty acids. However, the prevalence of modern processed vegetable oils and grain-fed proteins has pushed typical ratios to an alarming 15:1 or even 20:1. This severe imbalance leaves your body's inflammatory master switch stuck in the "on" position. The result is a slow, structural grinding down of your blood vessels, joints, skin health, and metabolic pathways.
        </p>

        <p className="text-white md:text-gray-700 text-base md:text-lg font-medium mb-6 text-center md:text-left">
          Your calculated ratio places you into one of three distinct clinical categories:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-white/10 md:bg-gray-100 rounded-xl p-6 shadow-[0_0_10px_#e5e5e5] text-left"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-lg"
                style={{ background: "linear-gradient(to right, #15AEE5, #0C607F)" }}
              >
                {idx + 1}
              </div>
              <h4 className="text-lg font-semibold text-white md:text-[#005C96] mb-2">
                {zone.title}
              </h4>
              <p className="text-white/90 md:text-gray-600 text-base leading-relaxed">
                {zone.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmegaRatioZones;
