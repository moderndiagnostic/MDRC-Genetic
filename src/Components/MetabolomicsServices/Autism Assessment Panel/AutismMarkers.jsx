import React from "react";

const categories = [
  {
    label: "1. Neurotransmitters & Pathway Balance (Daily Mood, Focus & Signal Clarity)",
    intro:
      "What it shows: The absolute balance of chemical messengers and pathway shifts that govern cognitive processing speed, focus, and brain cell protection.",
    items: [
      {
        name: "Serotonin & Tryptophan",
        desc: "Serotonin regulates sensory processing, mood, and sleep architectures, while its amino acid precursor, tryptophan, serves as the building block for both mood support and systemic defence.",
      },
      {
        name: "Dopamine",
        desc: "The driving force behind motivation, reward pathways, execution of tasks, and focus.",
      },
      {
        name: "Glutamate",
        desc: "The brain's primary excitatory messenger, crucial for learning. However, excessive glutamate causes excitotoxicity—overstimulating, stressing, and fatiguing delicate brain cells.",
      },
      {
        name: "Kynurenine & Kynurenine/Tryptophan Ratio",
        desc: "Under chronic physical stress or immune activation, the body \"steals\" tryptophan away from making calming serotonin to fuel the kynurenine pathway. A high ratio indicates ongoing neuro-metabolic stress.",
      },
    ],
  },
  {
    label: "2. Methylation Status Markers (Genetic Fidelity & Cellular Repair)",
    intro:
      "What it shows: Your body's capacity to execute vital cellular processes, manage genetic expression (epigenetics), repair cell tissue, and clear toxic elements. Methylation status disturbances can affect gene expression in the brain, leading to structural and cognitive disturbances.",
    items: [
      {
        name: "SAM, SAH & SAM/SAH Ratio",
        desc: "The absolute index of your body's methylation capacity. A low ratio indicates that cells are losing their \"operating manual,\" making DNA vulnerable to destabilization and slowing tissue repair.",
      },
      {
        name: "Methionine & Homocysteine",
        desc: "Critical amino acid turning points that evaluate how smoothly your body recycles proteins and fuels structural processes.",
      },
      {
        name: "Cysteine & Cystathionine",
        desc: "Foundational intermediates required to safely route toxic waste products into protective compounds.",
      },
    ],
  },
  {
    label: "3. Oxidative Stress & Detoxification (The Master Defense Shield)",
    intro:
      "What it shows: Your cells' active frontline defences against environmental toxicity and internal cellular rusting. Oxidative stress has been shown to be strongly linked to autism.",
    items: [
      {
        name: "Reduced Glutathione (GSH)",
        desc: "Your body's heavy-hitting, master antioxidant buffer that protects cellular powerhouses from damage.",
      },
      {
        name: "Oxidized Glutathione (GSSG)",
        desc: "The spent, used-up form of glutathione.",
      },
      {
        name: "GSH/GSSG Ratio",
        desc: "The ultimate metabolic gauge of cellular defence. A low ratio shows that your defence shield is being exhausted faster than it can be recycled, leaving tissues open to severe oxidative strain.",
      },
    ],
  },
  {
    label: "4. Primary Vitamins & Functional Biomarkers (Cellular Fuel Co-Factors)",
    intro:
      "What it shows: Whether you possess the baseline vitamins needed to run your metabolism, alongside high-precision markers that flag a deficiency before it shows up on standard blood work. Correct levels of vitamins are important for neuronal functions and neurotransmitter synthesis.",
    items: [
      {
        name: "Vitamin B12 & 5-Methyltetrahydrofolate (5-MTHF)",
        desc: "The essential active vitamins required to fire up your methylation cycles and support nerve health.",
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
      "What it shows: How efficiently your system processes, utilizes, and clears out primary neurotransmitters. Autism patients have imbalances in neurotransmitter synthesis or metabolism.",
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
        desc: "A downstream metabolite of the kynurenine pathway that modulates glutamate signals to shield brain cells from stress.",
      },
    ],
  },
  {
    label: "6. Gut Microbiome Metabolites (The Intercellular Friction Indicators)",
    intro:
      "What it shows: The exact level of toxic microbial byproducts entering your bloodstream from overactive or abnormal bacterial fermentation in the gut. Gut metabolites have been recently shown to be associated with a significant proportion of autism cases.",
    items: [
      {
        name: "p-Cresol & 4-Cresol",
        desc: "Highly specific markers of abnormal bacterial fermentation. High levels are directly linked to gut-driven systemic stress, social signalling shifts, and altered neuro-metabolic tone.",
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
      "What it shows: Whether your internal power plants (mitochondria) are cleanly generating energy or suffering from metabolic stalling that leads to fatigue and poor processing. The brain needs a lot of energy to carry out its functions. Abnormal energy production in the brain can affect cognition in a major way.",
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

const AutismMarkers = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-[28px] font-bold text-gray-800 mb-2">
          35 Critical Markers Across Seven Foundational Pathways
        </h2>
        <p className="text-center text-gray-500 text-base md:text-lg mb-10">
          A comprehensive blood and urinary snapshot of neuro-metabolic, methylation, and gut-brain axis balance.
        </p>

        {categories.map((cat, idx) => (
          <div key={idx} className={idx !== categories.length - 1 ? "mb-10" : ""}>
            <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-base md:text-lg">
              {cat.label}
            </div>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              {cat.intro}
            </p>

            <ul className="mt-5 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
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

export default AutismMarkers;
