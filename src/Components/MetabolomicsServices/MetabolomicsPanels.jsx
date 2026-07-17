import { Link } from "react-router-dom";
import {
  ArrowRight,
  FlaskConical,
  Pill,
  Heart,
  Brain,
  Activity,
  Shield,
  Sun,
  Microscope,
  Droplets,
} from "lucide-react";

const panels = [
  {
    title: "Metabolic & Nutritional Assessment Panel for Children with ASD",
    description:
      "Evaluates nutritional and metabolic imbalances that may influence the health and development of children with Autism Spectrum Disorder (ASD).",
    icon: Brain,
  },
  {
    title: "Depression Panel",
    description:
      "Assesses key nutritional and metabolic markers associated with mood, mental well-being, and depression.",
    icon: Activity,
  },
  {
    title: "Erythrocyte Omega-3: Omega-6 Fatty Acid Ratio",
    description:
      "Measures the balance of essential fatty acids important for heart, brain, and overall health.",
    icon: Heart,
  },
  {
    title: "Gut Microbiome Panel",
    description:
      "Provides insights into gut health, digestion, immunity, and the balance of beneficial intestinal bacteria.",
    icon: Microscope,
  },
  {
    title: "Therapeutic Drug Monitoring (TDM) Panel – Antipsychotic (Neuroleptic) Drugs",
    description:
      "Monitors antipsychotic drug levels to help optimise treatment effectiveness and minimise side effects.",
    icon: Pill,
  },
  {
    title: "Therapeutic Drug Monitoring (TDM) Panel – Antiepileptic Drugs",
    description:
      "Measures antiepileptic medication levels to support effective seizure control and safe dosing.",
    icon: Pill,
  },
  {
    title: "Therapeutic Drug Monitoring (TDM) Panel – First-line Anti-Tuberculosis Drugs",
    description:
      "Monitors anti-TB drug levels to ensure optimal treatment response and reduce treatment failure.",
    icon: Pill,
  },
  {
    title: "Busulfan AUC Monitoring",
    description:
      "Helps personalise Busulfan dosing during stem cell transplantation for improved safety and effectiveness.",
    icon: FlaskConical,
  },
  {
    title: "Therapeutic Drug Monitoring of Methotrexate",
    description:
      "Tracks Methotrexate levels to guide therapy and reduce the risk of drug-related toxicity.",
    icon: Pill,
  },
  {
    title: "Omega-6: Omega-3 Ratio Assessment Panel",
    description:
      "Evaluates fatty acid balance linked to inflammation, cardiovascular health, and overall wellness.",
    icon: Heart,
  },
  {
    title: "Antioxidant Capacity Panel",
    description:
      "Assesses the body's ability to protect cells from oxidative stress and premature aging.",
    icon: Shield,
  },
  {
    title: "Metabolic & Nutritional Assessment Panel for Depression",
    description:
      "Identifies nutritional and metabolic factors that may contribute to depression and mental health concerns.",
    icon: Brain,
  },
  {
    title: "Multivitamins (Water- & Fat-Soluble Vitamins)",
    description:
      "Comprehensive assessment of essential vitamins required for energy, immunity, and overall health.",
    icon: Sun,
  },
  {
    title: "Ultrasensitive Vitamin D",
    description:
      "Highly sensitive measurement of Vitamin D levels for accurate assessment of bone and immune health.",
    icon: Droplets,
  },
];

export default function MetabolomicsPanels() {
  return (
    <section className="bg-[#F5F7F9] font-roboto py-6 sm:py-8 px-4 lg:py-12 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mx-auto mb-8 sm:mb-12">
          <span className="text-[#15AEE5] font-medium text-sm sm:text-base">
            Our Panels
          </span>
          <h2 className="font-heading text-xl sm:text-2xl md:text-[28px] font-bold mt-1 mb-2 text-gray-800 leading-snug px-2">
            Panels Based on the Latest Discoveries in Health Science
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#424040]">
            New Test Panels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {panels.map((panel, index) => {
            const Icon = panel.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 sm:p-6 lg:p-8 shadow-[0_0_10px_#7e7e7e] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 flex flex-col h-full"
              >
                <div
                  className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-lg flex items-center justify-center mb-4 sm:mb-5 shrink-0"
                  style={{
                    background: "linear-gradient(to right, #15AEE5, #0C607F)",
                  }}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="font-modium text-base sm:text-[18px] md:text-[20px] font-semibold text-gray-800 mb-2 leading-snug">
                  {panel.title}
                </h3>

                <p className="text-[#727070] text-sm sm:text-[15px] md:text-[16px] mb-4 sm:mb-5 leading-relaxed flex-grow">
                  {panel.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm sm:text-[16px] font-medium text-[#15AEE5] group-hover:gap-2 transition-all mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
