import React from "react";

const categories = [
  {
    label: "1. Neuroleptics / Antipsychotics (Brain Chemistry & Signal Stabilizers)",
    intro:
      "What it shows: The exact circulating concentration of your specific antipsychotic medication (such as Olanzapine, Risperidone, Aripiprazole, Quetiapine, or Clozapine) and their active metabolites.",
    items: [
      {
        name: "The Clinical Connection",
        desc: "Keeping neuroleptics within a strict target zone ensures optimal receptor binding to manage mood and thought pathways cleanly. Monitoring prevents levels from climbing into toxic ranges, which can trigger severe side effects like extrapyramidal symptoms (involuntary movements, muscle stiffness), profound metabolic shifts, or extreme daytime sedation.",
      },
    ],
  },
  {
    label: "2. Anti-Epileptics / Anticonvulsants (Electrical Storm Shields)",
    intro:
      "What it shows: The real-time blood levels of your specific anti-seizure or mood-stabilizing medication (such as Valproic Acid, Levetiracetam, Carbamazepine, Lamotrigine, Phenytoin, or Topiramate).",
    items: [
      {
        name: "The Clinical Connection",
        desc: "These medications act as an electrical shield for your brain cells. Maintaining them in the target therapeutic window is vital to guarantee continuous defence against seizures and extreme mood fluctuations. Because many anti-epileptics heavily tax the liver or kidneys, monitoring ensures your vital organs are fully protected from toxic drug accumulation.",
      },
    ],
  },
];

const NeuropsychMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          Two Primary Clinical Categories
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          Advanced pharmacokinetic tracking of your specific neuropsychiatric medication regimen.
        </p>
        {categories.map((cat, idx) => (
          <div key={idx} className={idx !== categories.length - 1 ? "mb-7 sm:mb-10" : ""}>
            <div className="metab-label inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow text-sm sm:text-base md:text-lg max-w-full break-words">
              {cat.label}
            </div>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">{cat.intro}</p>
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

export default NeuropsychMarkers;
