import { useState } from "react";

const options = [
  "Therapeutic Drug Monitoring",
  "Newborn Screening for Inborn Errors of Metabolism",
  "Confirmation of Inborn Errors of Metabolism",
  "Urine citrate levels",
  "Gut microbiome health assessment",
  "Methylation status analysis",
  "Omega3 : Omega6 fatty acid ratio in RBS membrane",
  "Depression assessment panel",
  "Autism Assessment Panel",
  "Neurotransmitter and Catacolamine Assessment",
  "Fat & Water-Soluble Vitamins Panel",
  "High-Precision Assessment of Vitamin D Status",
  "Drugs of Abuse levels",
  "NAD+/NADH Ratio (Cellular & Redox and Metabolic Health Marker)",
  "GSH/GSSG Ratio (Redox Balance and Oxidative Stress Marker)"
];

export default function TestPanel() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-gray-100 font-roboto py-1 pb-10 px-4">
        <h1 className="text-center text-[22px] py-5 font-semibold text-[#005C96]">Tests Offered by MDRC Using LC-MS/MS Instruments</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-center ">
        {options.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
           className={`px-4 py-3 rounded-lg text-18  border text-semibold transition-all duration-200 cursor-pointer text-left
  ${
    active === index
      ? "bg-[#fff] text-[#005C96] border-[#005C96] shadow-md scale-[1.02]"
      : "bg-[#005C96] text-[#ffff] border-blue-200 hover:border-[#15AEE5] hover:bg-[#005C96"
  }
`}
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}