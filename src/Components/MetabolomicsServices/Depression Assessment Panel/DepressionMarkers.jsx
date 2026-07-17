import React from "react";

const categories = [
  {
    label: "1. Neurotransmitters & Pathway Balance (Daily Mood, Focus & Signal Clarity)",
    intro:
      "What it shows: The absolute balance of chemical messengers and pathway shifts that govern emotional stability, motivation, and brain cell protection.",
    items: [
      {
        name: "Serotonin & Tryptophan",
        desc: "Serotonin regulates your emotional baseline, stress shield, and sleep architecture, while its amino acid precursor, tryptophan, serves as the raw building block for mood support.",
      },
      {
        name: "Dopamine",
        desc: "The driving force behind your motivation, focus, anticipation of pleasure, and goal-directed drive. Deficiencies are heavily linked to apathy and emotional flatness.",
      },
      {
        name: "Glutamate",
        desc: "The brain's primary excitatory messenger. While necessary for memory, excessive glutamate levels cause excitotoxicity—overstimulating, stressing, and physically fatiguing brain cells.",
      },
      {
        name: "Kynurenine & Kynurenine/Tryptophan Ratio",
        desc: "Under chronic physical stress or systemic inflammation, the body \"steals\" tryptophan away from making calming serotonin to fuel the kynurenine pathway. A high ratio indicates ongoing neuro-metabolic stress that drives depressive behaviour.",
      },
    ],
  },
  {
    label: "2. Methylation Status Markers (Genetic Fidelity & Neurotransmitter Synthesis)",
    intro:
      "What it shows: Your body's capacity to execute vital cellular processes, manage genetic expression, repair tissues, and manufacture mood-regulating chemicals.",
    items: [
      {
        name: "SAM, SAH & SAM/SAH Ratio",
        desc: "The absolute index of your body's methylation capacity. A low ratio indicates that cells are losing their \"operating manuals,\" stalling the production of dopamine and serotonin, and slowing cellular repair.",
      },
      {
        name: "Methionine & Homocysteine",
        desc: "Critical amino acid turning points that evaluate how smoothly your body recycles proteins and manages cardiovascular and neurological health.",
      },
      {
        name: "Cysteine & Cystathionine",
        desc: "Foundational intermediates required to safely route metabolic waste products into protective compounds.",
      },
    ],
  },
  {
    label: "3. Oxidative Stress & Detoxification (The Master Defense Shield)",
    intro:
      "What it shows: Your cells' active frontline defences against environmental toxicity and the internal cellular \"rusting\" that drains mental energy.",
    items: [
      {
        name: "Reduced Glutathione (GSH)",
        desc: "Your body's heavy-hitting, master antioxidant buffer that protects cellular powerhouses from oxidative decay.",
      },
      {
        name: "Oxidized Glutathione (GSSG)",
        desc: "The spent, used-up form of glutathione.",
      },
      {
        name: "GSH/GSSG Ratio",
        desc: "The ultimate metabolic gauge of cellular defence. A low ratio shows that your defence shield is being exhausted faster than it can be recycled, leaving neural tissues open to severe oxidative strain.",
      },
    ],
  },
  {
    label: "4. Primary Vitamins & Functional Biomarkers (Cellular Fuel Co-Factors)",
    intro:
      "What it shows: Whether you possess the baseline vitamins needed to run your mood pathways, alongside high-precision markers that flag a deficiency before it shows up on standard blood work.",
    items: [
      {
        name: "Vitamin B12 & 5-Methyltetrahydrofolate (5-MTHF)",
        desc: "The essential active vitamins required to fire up your methylation cycles, protect nerves, and support red blood cell health.",
      },
      {
        name: "Methylmalonic Acid (MMA)",
        desc: "The functional marker for B12. High MMA proves that your cells are starved of B12 on a cellular level, even if your circulating blood levels look normal.",
      },
      {
        name: "Xanthurenic Acid",
        desc: "The functional marker for Vitamin B6 status, indicating potential enzymatic bottlenecks in brain chemistry.",
      },
    ],
  },
  {
    label: "5. Urine Neurotransmitter Metabolites (Brain Chemical Lifecycle Tracker)",
    intro:
      "What it shows: How efficiently your system processes, utilizes, and clears out primary neurotransmitters.",
    items: [
      {
        name: "5-HIAA (5-Hydroxyindoleacetic Acid)",
        desc: "The principal breakdown product of serotonin, revealing serotonin turnover and gut-brain balance.",
      },
      {
        name: "HVA & VMA",
        desc: "The definitive metabolic waste products of dopamine (HVA) and adrenaline/noradrenaline (VMA). They indicate if stress systems are running on empty or burning through reserves too quickly.",
      },
      {
        name: "Kynurenic Acid",
        desc: "A downstream metabolite of the kynurenine pathway that modulates glutamate signals to shield brain cells from emotional and physical stress.",
      },
    ],
  },
  {
    label: "6. Gut Microbiome Metabolites (Indicators of Metabolism Regulation by Gut)",
    intro:
      "What it shows: The exact level of toxic microbial byproducts entering your bloodstream from overactive or abnormal bacterial fermentation in the gut, which actively fuels neuroinflammation.",
    items: [
      {
        name: "4-Cresol",
        desc: "A highly specific marker of abnormal bacterial fermentation. High levels are directly linked to gut-driven systemic stress, sleep disturbances, and altered neuro-metabolic tone.",
      },
      {
        name: "p-Hydroxyphenyllactic & p-Hydroxyphenylacetic Acids",
        desc: "Secondary metabolites signalling bacterial overgrowths that place an unexpected metabolic burden on the liver.",
      },
      {
        name: "Phenylacetic & Hippuric Acids",
        desc: "Markers that reveal the health, diversity, and balance of your beneficial vs. harmful anaerobic gut microbes.",
      },
    ],
  },
  {
    label: "7. Energy Metabolism Markers (Mitochondrial Engine Efficiency)",
    intro:
      "What it shows: Whether your internal power plants (mitochondria) are cleanly generating energy or suffering from metabolic stalling that leads to systemic fatigue and brain fog.",
    items: [
      {
        name: "Succinic, Fumaric & Malic Acids",
        desc: "Core components of the Krebs cycle. Deficiencies or spikes in these organic acids pinpoint exact structural blocks where your cells fail to generate physical energy.",
      },
      {
        name: "Lactic & Pyruvic Acids",
        desc: "Indicators of how your body processes sugars. A high lactic-to-pyruvic ratio reveals that cells are forced into an inefficient energy mode, driving localized cellular fatigue.",
      },
    ],
  },
];

const DepressionMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          35 Critical Markers Across Seven Foundational Pathways
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          A comprehensive blood and urinary snapshot of neuro-metabolic, methylation, and brain-axis balance in mood disorders.
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

export default DepressionMarkers;
