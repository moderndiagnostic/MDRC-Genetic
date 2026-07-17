import React from "react";

const categories = [
  {
    label: "1. The Core Neurotransmitters (Daily Mood & Focus)",
    intro:
      "What it shows: The absolute levels of your primary chemical messengers responsible for mood stability, motivation, and cognitive processing speed.",
    aging:
      "The Health & Aging Connection: Deficiencies or sharp imbalances in these neurotransmitters impair everyday cognitive performance and leave neurons more vulnerable to stress-induced decay.",
    items: [
      {
        name: "Serotonin",
        desc: "Your primary mood stabilizer and calming neurotransmitter. Optimal levels support emotional resilience, healthy sleep architectures, and digestive motility, while low levels compromise your stress shield.",
      },
      {
        name: "Dopamine",
        desc: "The driver of your brain's reward, motivation, and focus systems. Balanced dopamine is essential for cognitive flexibility, motor control, and clear execution of tasks without mental fatigue.",
      },
      {
        name: "Glutamate",
        desc: "The brain's primary excitatory neurotransmitter, essential for learning and memory. While crucial for cognitive function, excessive glutamate levels flip a switch into excitotoxicity, overstimulating and damaging brain cells.",
      },
    ],
  },
  {
    label: "2. The Kynurenine Pathway (The Inflammatory Switch)",
    intro:
      "What it shows: Whether your body is using dietary amino acids to build protective neurotransmitters or diverting them to fuel neuroinflammation.",
    aging:
      "The Health & Aging Connection: Under systemic or localized stress, the body alters how it processes tryptophan. Instead of making calming serotonin, it activates pathways that produce neurotoxic compounds, accelerating brain aging and systemic inflammaging.",
    items: [
      {
        name: "Kynurenine",
        desc: "A key metabolite produced when tryptophan is broken down. Elevated levels signal that your body is shifting away from serotonin production and toward a systemic inflammatory response, generating severe cellular friction.",
      },
      {
        name: "Kynurenine/Tryptophan Ratio",
        desc: "The ultimate metabolic gauge of neuroinflammation. A high ratio reveals that your biochemical machinery is actively stealing tryptophan to fuel inflammatory pathways, starving your brain of serotonin and driving chronic neuro-metabolic stress.",
      },
    ],
  },
];

const NeuroMetabolicMarkers = () => {
  return (
    <div className="metab-markers bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mb-2 px-1">
          Five Critical Markers Across Two Core Regulatory Systems
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 px-1">
          A precise snapshot of your current neuro-metabolic and neuro-inflammatory status.
        </p>

        {categories.map((cat, idx) => (
          <div key={idx} className={idx !== categories.length - 1 ? "mb-7 sm:mb-10" : ""}>
            <div className="metab-label inline-block bg-gradient-to-b from-[#005C96] to-[#15AEE5] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow text-sm sm:text-base md:text-lg max-w-full break-words">
              {cat.label}
            </div>

            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {cat.intro}
            </p>

            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
              {cat.aging}
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

export default NeuroMetabolicMarkers;
