import React from "react";

const categories = [
  {
    label: "1. The Amino Acid Profile (Protein Metabolism Screen)",
    intro:
      "What it shows: The exact balance of essential amino acids in the blood. This screen detects whether the infant's body lacks the specific enzymes needed to safely break down and utilize dietary proteins.",
    items: [
      {
        name: "Key Disruption Markers",
        desc: "This pathway screens for critical conditions such as Phenylketonuria (PKU), Maple Syrup Urine Disease (MSUD), Homocystinuria, and many others.",
      },
      {
        name: "The Clinical Connection",
        desc: "Early identification allows for instant dietary modifications, replacing standard proteins with specialized medical formulas to prevent cognitive deficits, seizures, and systemic toxicity.",
      },
    ],
  },
  {
    label: "2. The Acylcarnitine Profile (Fatty Acid Oxidation & Organic Acid Screen)",
    intro:
      "What it shows: The specific transport molecules (acylcarnitines) responsible for carrying fats into the mitochondrial powerhouses to be burned for energy.",
    items: [
      {
        name: "Key Disruption Markers",
        desc: "This pathway identifies Fatty Acid Oxidation Defects (such as MCAD deficiency) and Organic Acidemias.",
      },
      {
        name: "The Clinical Connection",
        desc: "Infants with these blocks cannot unlock energy from stored body fat during periods of fasting or illness. Early detection prevents critical energy crashes, metabolic acidosis, and heart strain by implementing simple, highly effective feeding schedules and carnitine supplementation.",
      },
    ],
  },
];

const NewbornScreeningMarkers = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-[28px] font-bold text-gray-800 mb-2">
          Two Master Biochemical Pathways from a Single Blood Spot
        </h2>
        <p className="text-center text-gray-500 text-base md:text-lg mb-10">
          Using advanced MS/MS technology, this panel isolates and counts individual molecules by their exact weight and charge.
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

export default NewbornScreeningMarkers;
