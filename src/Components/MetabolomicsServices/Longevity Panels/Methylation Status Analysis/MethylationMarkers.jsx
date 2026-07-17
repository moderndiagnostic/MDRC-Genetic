import React from "react";

const categories = [
  {
    label: "1. The Core Efficiency Engine (The Primary Methylation Drivers)",
    intro:
      "What it shows: The real-time absolute capacity of your body to perform vital microscopic repairs, synthesize mood chemicals, and control genetic expression.",
    items: [
      {
        name: "S-Adenosylmethionine (SAM)",
        desc: "The body's primary master methyl donor. SAM supplies the necessary chemical tags to regulate DNA, manufacture neurotransmitters, and fuel liver detoxification. Low levels directly drive low mood, physical fatigue, and impaired tissue repair.",
      },
      {
        name: "S-Adenosylhomocysteine (SAH)",
        desc: "A potent pathway inhibitor. When SAH levels climb too high, it acts as a molecular emergency brake that shuts down the entire methylation cycle. High levels force a state of cellular stress, global DNA hypomethylation, and dysregulated gene expression.",
      },
      {
        name: "The SAM/SAH Ratio",
        desc: "The ultimate functional gauge of methylation efficiency. A low ratio indicates a stalled system under severe metabolic stress, directly correlating with accelerated cellular aging, neurological strain, and epigenetic instability.",
      },
    ],
  },
  {
    label: "2. The Recyclers & Clearance Pathways (The Toxic Safety Valves)",
    intro:
      "What it shows: How effectively your body clears out inflammatory waste products and recycles raw materials back into the main cellular loop.",
    items: [
      {
        name: "Homocysteine",
        desc: "A highly sensitive early biomarker of systemic methylation imbalance. Homocysteine is highly toxic to blood vessels and neurons when it accumulates. Elevated levels serve as a primary warning indicator for cardiovascular risks, cognitive decline, and mood vulnerabilities.",
      },
      {
        name: "Methionine",
        desc: "The essential, sulphur containing amino acid that initiates the entire methylation cycle. Low levels restrict your baseline SAM production, capping your total daily methylation output.",
      },
      {
        name: "Vitamin B12",
        desc: "The mandatory enzymatic co-factor required to safely recycle toxic homocysteine back into clean, usable methionine. A cellular deficiency causes the entire pathway to stall, draining your brain health, energy levels, and nerve protection.",
      },
    ],
  },
  {
    label: "3. The Backup Networks & Turn-Over Trackers (The Resiliency Systems)",
    intro:
      "What it shows: Your body's secondary defence mechanisms and amino acid inputs that support the main engine when it faces heavy workload demands.",
    items: [
      {
        name: "Choline & Betaine",
        desc: "Your body's alternate, backup methyl donors. These compounds step in to support liver protection and homocysteine clearance whenever your primary, folate-dependent pathways are placed under systemic strain.",
      },
      {
        name: "Serine",
        desc: "The primary molecular donor of one-carbon units to the folate cycle. Serine acts as the fundamental upstream fuel that indirectly drives SAM production, binding dietary protein metabolism directly to DNA health.",
      },
      {
        name: "Sarcosine",
        desc: "A highly dynamic marker that tracks real-time methyl group turnover. Low levels point to sluggish, unreactive methylation dynamics, while shifts help map altered cellular metabolism.",
      },
    ],
  },
  {
    label: "4. The Antioxidant & Detoxification Shield (The Microenvironment Protector)",
    intro:
      "What it shows: The structural connection between your methylation performance, cellular detoxification, and your defence against internal cellular rusting.",
    items: [
      {
        name: "Cystathionine",
        desc: "The vital metabolic bridge linking your methylation cycle directly to your antioxidant defences. Low levels signify that your system is failing to convert toxic intermediates into protective pathways, escalating your oxidative stress risks.",
      },
      {
        name: "Glutathione",
        desc: "The ultimate master antioxidant. Methylation enzymes require a clean, low-stress cellular environment to function. High-purity glutathione neutralizes damaging molecules, preventing the free radical destruction of your vital methylation machinery.",
      },
    ],
  },
];

const MethylationMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          Eleven Critical Markers of Methylation Capacity
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          A precise metabolomic snapshot of your one-carbon metabolism and cellular regulation.
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

export default MethylationMarkers;
