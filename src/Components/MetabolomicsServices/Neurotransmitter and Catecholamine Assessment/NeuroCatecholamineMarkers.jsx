import React from "react";

const categories = [
  {
    label:
      "1. The Catecholamines & Core Neurotransmitters (Drive, Stress Shield, and Survival)",
    intro:
      "What it shows: The absolute levels of your primary chemical messengers and stress hormones responsible for cognitive processing speed, motivation, and your active response to pressure.",
    items: [
      {
        name: "Adrenaline (Epinephrine)",
        desc: "Your primary \"fight-or-flight\" survival hormone produced by the adrenal glands. It spikes under acute stress. Chronically abnormal levels point to severe adrenal fatigue, chronic anxiety, and systemic nervous system exhaustion.",
      },
      {
        name: "Noradrenaline (Norepinephrine)",
        desc: "The direct precursor to adrenaline, serving as both a stress hormone and a neurotransmitter. It dictates your baseline alertness, focus, blood pressure regulation, and vigilance under pressure.",
      },
      {
        name: "Dopamine",
        desc: "The driving force behind your motivation, reward pathways, and focus. Balanced dopamine production is essential for mental clarity, goal-directed behavior, and resisting executive burnout.",
      },
      {
        name: "Serotonin",
        desc: "Known as the body's primary stabilizing neurotransmitter. Optimal peripheral levels support stress resilience, emotional balance, healthy sleep patterns, and digestive function.",
      },
      {
        name: "Glutamate",
        desc: "The nervous system's main excitatory messenger, crucial for learning and memory formation. However, when glutamate levels spike out of control, it acts as a cellular toxin, overstimulating and fatiguing your biological engines.",
      },
    ],
  },
  {
    label: "2. Neurotransmitter Metabolites (Clearance and Turnover Rates)",
    intro:
      "What it shows: How quickly your body is breaking down and clearing out your primary neurotransmitters. Measuring metabolites helps determine if a deficiency is caused by low production or hyper-fast breakdown.",
    items: [
      {
        name: "HVA (Homovanillic Acid)",
        desc: "The principal metabolic waste product of dopamine. Tracking HVA tells us if your brain is metabolizing dopamine too quickly or suffering from poor synthesis.",
      },
      {
        name: "DOPAC (3,4-Dihydroxyphenylacetic Acid)",
        desc: "A direct intermediate metabolite of dopamine breakdown. High or low levels help pinpoint exact enzymatic bottlenecks (such as MAO enzyme activity) before dopamine can be converted into noradrenaline.",
      },
      {
        name: "5-HIAA (5-Hydroxyindoleacetic Acid)",
        desc: "The primary breakdown product of serotonin. Evaluating 5-HIAA alongside serotonin reveals your actual serotonin turnover rate and provides deep insights into gut-brain axis health.",
      },
    ],
  },
  {
    label: "3. The Kynurenine Pathway (The Inflammatory Switch)",
    intro:
      "What it shows: Whether your body is using essential amino acids to build protective neurotransmitters or diverting them to fuel systemic inflammation.",
    items: [
      {
        name: "Kynurenine",
        desc: "A metabolite generated when the body breaks down tryptophan. Under periods of physical stress or chronic low-grade inflammation, production spikes, steering raw materials away from serotonin production.",
      },
      {
        name: "Kynurenine/Tryptophan Ratio",
        desc: "The ultimate metabolic indicator of systemic neuroinflammation. A high ratio means your body's biochemistry is actively diverting tryptophan to inflammatory pathways, starving your system of the building blocks needed for mood support.",
      },
    ],
  },
];

const NeuroCatecholamineMarkers = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 md:px-10 font-roboto lg:py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-[28px] font-bold text-gray-800 mb-2">
          Ten Critical Markers Across Three Core Regulatory Systems
        </h2>
        <p className="text-center text-gray-500 text-base md:text-lg mb-10">
          A complete, non-invasive urinary snapshot of your neuro-adrenal pathway balance.
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

export default NeuroCatecholamineMarkers;
