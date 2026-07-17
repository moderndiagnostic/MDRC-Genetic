import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Simple Sample Collection",
    description:
      "A quick, painless cheek swab or blood draw at an MDRC center or via home collection.",
  },
  {
    step: "Step 2",
    title: "Advanced Lab Analysis",
    description:
      "Our state-of-the-art molecular lab sequences your DNA with absolute precision.",
  },
  {
    step: "Step 3",
    title: "Comprehensive Report",
    description:
      "Receive an easy-to-read, deeply detailed breakdown of your genetic traits and risks.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-6 px-4 lg:py-10 sm:px-6 font-roboto bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#005C96] text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-[#15AEE5] font-semibold text-sm mb-2">
                {item.step}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
