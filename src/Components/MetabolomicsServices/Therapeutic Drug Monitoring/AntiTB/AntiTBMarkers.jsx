import React from "react";

const categories = [
  {
    label: "1. Isoniazid (INH)",
    intro:
      "What it shows: The exact peak concentration of Isoniazid (at 2h post-dose or 1, 2, and 4 h post-dose) in your bloodstream.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "Keeping Isoniazid in the target zone ensures effective bacterial killing. If levels climb too high due to slow liver clearance, it can cause severe peripheral neuropathy (nerve numbness and tingling) and liver strain.",
      },
    ],
  },
  {
    label: "2. Rifampicin (RIF)",
    intro:
      "What it shows: The real-time circulating levels of Rifampicin (at 2h post-dose or 1, 2, and 4 h post-dose), a powerful antibiotic that blocks bacterial replication.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "Rifampicin absorption can be highly unpredictable and is frequently low in patients with digestive issues or diabetes. Tracking its exact level guarantees that your body is absorbing enough medication to prevent the emergence of multi-drug resistant TB (MDR-TB).",
      },
    ],
  },
  {
    label: "3. Pyrazinamide (PZA)",
    intro:
      "What it shows: The precise measurement of Pyrazinamide (at 2h post-dose or 1, 2, and 4 h post-dose), a crucial drug that kills dormant bacteria hidden deep within tissues.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "Pyrazinamide requires strict monitoring because it is a primary driver of drug-induced hepatitis and joint pain (caused by uric acid accumulation). Accurate tracking allows your doctor to maximize its benefits while safeguarding your liver and joints.",
      },
    ],
  },
  {
    label: "4. Ethambutol (EMB)",
    intro:
      "What it shows: The exact blood concentration of Ethambutol, which prevents the bacteria from building its protective cell wall.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "Ethambutol is cleared primarily by the kidneys. If kidney clearance slows down, Ethambutol can accumulate and cause optic neuritis (vision changes). Monitoring its level ensures your eyes and nervous system remain completely protected.",
      },
    ],
  },
];

const AntiTBMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          Four Foundational First-Line Anti-TB Medications
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          Advanced pharmacokinetic tracking of absolute drug index at critical post-dose intervals.
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

export default AntiTBMarkers;
