import React from "react";

const categories = [
  {
    label: "1. The Omega-3 Pathway (The Inflammation Off-Switch)",
    intro:
      "What it shows: Your cellular reservoir of anti-inflammatory fats that protect the heart, soothe joints, and form the structural architecture of the brain.",
    items: [
      {
        name: "Alpha-Linolenic Acid (ALA)",
        desc: "The foundational plant-based Omega-3. Your body utilizes ALA as a starting block to synthesize longer, highly protective cellular fats.",
      },
      {
        name: "Eicosapentaenoic Acid (EPA)",
        desc: "The body's primary anti-inflammatory lipid powerhouse. EPA directly shuts down the production of pro-inflammatory signaling molecules and protects blood vessels from oxidative stress.",
      },
      {
        name: "Docosapentaenoic Acid (DPA)",
        desc: "An ultra-potent, deeply restorative intermediate Omega-3. DPA acts as a highly efficient reservoir that your body dynamically converts into EPA or DHA as needed to resolve tissue inflammation.",
      },
      {
        name: "Docosahexaenoic Acid (DHA)",
        desc: "The primary structural component of your brain tissue and retina. Optimal DHA levels are mandatory for maintaining cell membrane fluidity, sharp cognitive function, and long-term neurological health.",
      },
    ],
  },
  {
    label: "2. The Omega-6 Pathway (The Pro-Inflammatory Baseline)",
    intro:
      "What it shows: The family of fats responsible for initiating acute immune and inflammatory responses. While necessary to fight infections, an unbuffered excess drives chronic cellular friction.",
    items: [
      {
        name: "Linoleic Acid (LA)",
        desc: "The primary plant- and vegetable-oil-derived Omega-6 that dominates modern diets. High tissue concentrations act as a steady fuel source for systemic inflammatory pathways.",
      },
      {
        name: "Gamma-Linolenic Acid (GLA)",
        desc: "A unique, beneficial Omega-6 intermediate. Unlike its counterparts, GLA can be channelled by the body to produce protective, anti-inflammatory compounds when balanced by adequate Omega-3s.",
      },
      {
        name: "Dihomo-Gamma-Linolenic Acid (DGLA)",
        desc: "A critical metabolic pivot point. Depending on your overall nutrient status, DGLA will either convert into protective molecules or feed directly into highly inflammatory pathways.",
      },
      {
        name: "Arachidonic Acid (AA)",
        desc: "The ultimate driver of cellular friction and acute inflammation. AA is the direct raw material your body uses to build inflammatory eicosanoids. When AA levels overwhelm your Omega-3 levels, your tissues remain under constant, low-grade immune attack.",
      },
    ],
  },
];

const OmegaMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          Eight Essential Fatty Acid Markers Across Two Pathways
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          An objective look at your body's cellular defence and inflammatory baseline beyond a basic cholesterol check.
        </p>

        {categories.map((cat, idx) => (
          <div key={idx} className={idx !== categories.length - 1 ? "mb-7 sm:mb-10" : ""}>
            <div className="metab-label inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow text-sm sm:text-base md:text-lg max-w-full break-words">
              {cat.label}
            </div>

            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {cat.intro}
            </p>

            <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-xl">•</span>
                  <p>
                    <b className="text-[#005C96]">{item.name}:</b> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OmegaMarkers;
