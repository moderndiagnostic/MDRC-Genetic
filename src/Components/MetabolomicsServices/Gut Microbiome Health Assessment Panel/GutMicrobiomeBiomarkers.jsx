import React from "react";

const categories = [
  {
    label: "1. Core Gut Organic Acids (Microbial Metabolism & Dysbiosis)",
    intro:
      "What they show: Whether your gut bacteria are producing toxic waste products that damage your body or maintaining a clean, balanced metabolism.",
    items: [
      {
        name: "Indoxyl Sulfate",
        desc: "A direct marker of protein putrefaction by gut bacteria. Elevated levels indicate a highly toxic microbial metabolism, advanced dysbiosis, increased intestinal permeability (leaky gut), and a heavy gut-derived inflammatory burden.",
      },
      {
        name: "p-Cresol Sulfate",
        desc: "A byproduct of abnormal microbial tyrosine fermentation. High levels signal harmful bacterial overgrowth and are directly linked to gut-driven systemic and neuroinflammatory stress.",
      },
      {
        name: "Hippuric Acid",
        desc: "A crucial marker where low levels directly indicate a severe reduction in microbial diversity and a lack of protective plant-based inputs.",
      },
      {
        name: "D-Lactate",
        desc: "A highly specific organic acid where elevated levels suggest severe bacterial overgrowth from carbohydrate-fermenting microbes, stressing the gut environment.",
      },
      {
        name: "Succinate",
        desc: "Acts as a powerful gut-derived inflammatory signaling molecule. High levels indicate inflammatory dysbiosis and severe localized metabolic stress.",
      },
    ],
  },
  {
    label: "2. Fermentation & Diet-Related Microbiome (Beneficial Activity)",
    intro:
      "What it shows: Your microbiome's capacity to properly process dietary nutrients and maintain a resilient, protective gut barrier.",
    items: [
      {
        name: "4-Hydroxyhippuric Acid",
        desc: "A vital marker that confirms the healthy, functional processing of plant-derived polyphenols by beneficial gut microbes.",
      },
      {
        name: "3,4-Dihydroxyphenylpropionic Acid",
        desc: "A key marker of beneficial anaerobic bacterial activity. Normal levels validate strong, functional microbial diversity.",
      },
      {
        name: "Indole-3-Propionic Acid (IPA)",
        desc: "A powerful anti-inflammatory compound. Low levels suggest a critical loss of beneficial microbiota, directly warning of compromised gut-barrier integrity and a loss of anti-inflammatory protection.",
      },
    ],
  },
  {
    label: "3. Gut-Linked Oxidative Stress Biomarkers",
    intro:
      "What it shows: How deeply your localized gut dysfunction is draining your body's primary cellular defence systems.",
    items: [
      {
        name: "Pyroglutamic Acid",
        desc: "A highly sensitive marker of glutathione depletion and severe oxidative stress. High values reveal that systemic cellular stress is being actively driven by ongoing gut dysfunction.",
      },
    ],
  },
];

const GutMicrobiomeBiomarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          The Panel Measures the Following Biomarkers
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          A precise, metabolomic snapshot of your gut-derived inflammatory burden.
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

export default GutMicrobiomeBiomarkers;
