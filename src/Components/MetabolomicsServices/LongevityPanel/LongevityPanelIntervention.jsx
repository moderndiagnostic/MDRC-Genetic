import React from "react";

const interventions = [
  {
    title: "Targeted Supplementation",
    text: "Recharging your cellular battery and stress shield with evidence-guided nutrients.",
  },
  {
    title: "Nutritional Shifts",
    text: "Modifying dietary fats and micronutrients to reduce inflammation and restore balance.",
  },
  {
    title: "Lifestyle Refinements",
    text: "Adjusting sleep, stress management, and daily habits to support healthier aging.",
  },
  {
    title: "Track Your Progress: Test, Optimize, Retest",
    text: "Retesting every 3–6 months provides objective proof that your aging speed is improving.",
  },
];

const LongevityPanelIntervention = () => {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 font-roboto lg:py-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#005C96] mb-4">
          Knowledge is Power. Intervention is the Cure.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
          The most empowering aspect of the Aging Speed Panel is that your results
          are not a life sentence—they are a call to action. If your aging speed
          is higher than your chronological age, you can take targeted steps to
          slow it down.
        </p>

        <ul className="space-y-4 mb-6">
          {interventions.map(({ title, text }) => (
            <li
              key={title}
              className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
            >
              <span className="text-green-500 shrink-0 mt-0.5">•</span>
              <p>
                <span className="font-semibold text-[#005C96]">{title}:</span>{" "}
                {text}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          We recommend retesting every 3–6 months to see objective proof that
          your aging speed is improving. This is not about fearing the clock—it
          is about taking control of your aging trajectory and ensuring your
          biological age stays as young as your spirit.
        </p>
      </div>
    </section>
  );
};

export default LongevityPanelIntervention;
