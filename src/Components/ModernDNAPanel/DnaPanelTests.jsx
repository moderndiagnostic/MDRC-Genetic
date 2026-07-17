import { useState } from "react";

const lifestylePanels = [
  "Modern DNA Wellness Test",
  "Modern DNA Fitness Test",
  "Modern DNA Weight Loss Test",
  "Modern DNA Nutrition Test",
  "Modern DNA Skin Test",
  "Modern DNA Sleep Test",
];

const cardioPanels = [
  "Modern-PRS Panel (Polygenic Risk Score)",
  "Modern DNA CardioMet Test",
  "Modern DNA Diabetic Risk Panel",
];

const organPanels = [
  "Modern DNA Kidney Test",
  "Modern DNA Immunity Test",
  "Modern DNA Autoimmunity Test",
  "Modern DNA Women's Health Test",
  "Modern DNA Men's Health Test",
];

const longevityPanels = [
  "Modern EpiAge Test",
  "Modern Telomere Test",
];

const allPanels = [
  ...lifestylePanels,
  ...cardioPanels,
  ...organPanels,
  ...longevityPanels,
];

export default function DnaPanelTests() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-gray-100 font-roboto py-1 pb-8 sm:pb-10 px-4 sm:px-6">
      <h1 className="text-center text-lg sm:text-[22px] py-4 sm:py-5 font-semibold text-[#005C96] px-2">
        Modern DNA Panels Offered by MDRC
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-center">
        {allPanels.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 py-3 rounded-lg text-18 border text-semibold transition-all duration-200 cursor-pointer text-left
              ${
                active === index
                  ? "bg-[#fff] text-[#005C96] border-[#005C96] shadow-md scale-[1.02]"
                  : "bg-[#005C96] text-[#ffff] border-blue-200 hover:border-[#15AEE5] hover:bg-[#005C96]"
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
