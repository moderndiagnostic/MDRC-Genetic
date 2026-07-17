import React from "react";

const categories = [
  {
    label: "1. High-Dose Oncology Monitoring (24-Hour, 48-Hour, and 72-Hour Windows)",
    intro:
      "What it shows: The exact mathematical calculation of your circulating Methotrexate levels at strict intervals following a high-dose infusion.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "These specific time points are critical. Tracking your clearance curve tells your medical team exactly how long your tissues are being exposed to the drug. It provides the definitive metric used to calculate the precise dose and duration of Leucovorin rescue therapy required to shield your healthy cells from permanent damage.",
      },
    ],
  },
  {
    label: "2. Low-Dose Autoimmune Tracking (Steady-State Profiling)",
    intro:
      "What it shows: The baseline concentration of Methotrexate in your system during long-term, low-dose maintenance therapy.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "Monitoring ensures your levels remain consistently within the therapeutic window to quiet overactive immune pathways, while confirming that the drug is not quietly building up in your tissues and placing an unexpected metabolic burden on your liver or bone marrow.",
      },
    ],
  },
];

const MethotrexateMarkers = () => (
  <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-center text-2xl md:text-[28px] font-bold text-gray-800 mb-2">
        Medication Exposure Across Vital Treatment Milestones
      </h2>
      <p className="text-center text-gray-500 text-base md:text-lg mb-10">
        Advanced pharmacokinetic tracking of absolute Methotrexate index at critical intervals.
      </p>
      {categories.map((cat, idx) => (
        <div key={idx} className={idx !== categories.length - 1 ? "mb-10" : ""}>
          <div className="inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-6 py-2 rounded-lg font-semibold shadow text-base md:text-lg">
            {cat.label}
          </div>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">{cat.intro}</p>
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

export default MethotrexateMarkers;
