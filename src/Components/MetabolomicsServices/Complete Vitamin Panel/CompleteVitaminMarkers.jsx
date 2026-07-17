import React from "react";

const categories = [
  {
    label: "1. Water-Soluble Vitamins (The Cellular Spark Plugs)",
    intro:
      "What it shows: The active vitamins that circulate freely through your body to drive energy production, nerve signalling, and DNA repair. Because your body cannot store these compounds long-term, they require constant daily replenishment.",
    items: [
      {
        name: "Thiamine Pyrophosphate (Active B1)",
        desc: "The primary co-factor required to turn carbohydrates into cellular energy. It is essential for brain health and heart function.",
      },
      {
        name: "Riboflavin (B2)",
        desc: "A fundamental component of cellular respiration and energy pathways, required to recycle antioxidants throughout your body.",
      },
      {
        name: "Nicotinamide Adenine Dinucleotide (B3-Metabolite)",
        desc: "The direct cellular fuel needed to drive your mitochondrial powerhouses, repair damaged DNA, and support cellular longevity.",
      },
      {
        name: "Pantothenic Acid (B5)",
        desc: "The core building block of Coenzyme A, necessary for fat metabolism, red blood cell production, and hormone synthesis.",
      },
      {
        name: "Pyridoxal-5-Phosphate (Active B6)",
        desc: "The primary driver of amino acid metabolism, strictly required to manufacture mood-regulating neurotransmitters like serotonin and dopamine.",
      },
      {
        name: "Biotin (B7)",
        desc: "A vital enzyme helper responsible for breaking down macronutrients to support healthy skin, hair, and metabolic function.",
      },
      {
        name: "5-Methyltetrahydrofolate (Active Folate / B9)",
        desc: "The bioavailable form of folate mandatory for cellular division, genetic expression, and healthy methylation cycles.",
      },
      {
        name: "Active B12 Markers (Cobalamin)",
        desc: "The essential nutrient required to maintain the protective coating around your nerves and produce healthy red blood cells.",
      },
      {
        name: "Ascorbic Acid (Vitamin C)",
        desc: "A powerful water-soluble antioxidant that shields circulating proteins, supports collagen synthesis, and fuels immune cells.",
      },
    ],
  },
  {
    label: "2. Fat-Soluble Vitamins (The Structural Protectors)",
    intro:
      "What it shows: The specialized vitamins stored in your body's tissues and liver. These nutrients act as structural architects, governing immune regulation, bone density, and cell membrane protection.",
    items: [
      {
        name: "Retinol (Vitamin A)",
        desc: "The master regulator of cellular growth, mandatory for maintaining clear vision, healthy skin barriers, and robust immune defenses.",
      },
      {
        name: "25-Hydroxyvitamin D (Vitamin D)",
        desc: "A vital pro-hormone that modulates over 2,000 genes, directly controlling calcium absorption, bone strength, and systemic immune balance.",
      },
      {
        name: "Alpha-Tocopherol (Vitamin E)",
        desc: "Your primary fat-soluble antioxidant. It embeds itself directly into your cell membranes to shield delicate cellular lipids from oxidative stress.",
      },
      {
        name: "Phylloquinone / Menaquinone (Vitamin K1 & K2)",
        desc: "The dual-action structural directors. K1 regulates healthy blood clotting, while K2 acts as a traffic controller, directing calcium into your bones and teeth while keeping it out of your arteries.",
      },
    ],
  },
];

const CompleteVitaminMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          Complete Spectrum of Essential Vitamins
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          A precise biochemical map of water-soluble and fat-soluble micronutrient status.
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

export default CompleteVitaminMarkers;
