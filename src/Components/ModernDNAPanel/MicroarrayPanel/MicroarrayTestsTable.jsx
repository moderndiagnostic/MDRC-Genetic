import React from "react";

const tests = [
  {
    name: "My DNA Wellness Test",
    description:
      "A comprehensive SNP genotyping-based genetic wellness test that provides personalized insights into nutrition, fitness, weight management, and detoxification. The test analyzes genetic variants influencing dietary response, exercise performance, metabolism, vitamin requirements, body composition, and detoxification pathways to support informed lifestyle decisions and preventive health management.",
  },
  {
    name: "My DNA Fitness Test",
    description:
      "An SNP genotyping-based test that evaluates genetic factors influencing exercise response, aerobic and anaerobic capacity, muscle strength, endurance, injury susceptibility, and recovery. Helps personalize fitness and training strategies for improved performance.",
  },
  {
    name: "My DNA Weight Loss Test",
    description:
      "An SNP genotyping-based test that assesses genetic factors associated with weight management, appetite regulation, fat metabolism, eating behavior, and obesity risk. Provides personalized recommendations to support effective weight management.",
  },
  {
    name: "My DNA Nutrition Test",
    description:
      "An SNP genotyping-based test that evaluates genetic variants affecting nutrient metabolism, vitamin and mineral requirements, food sensitivities, macronutrient utilization, and dietary preferences. Enables personalized nutrition planning for optimal health.",
  },
  {
    name: "My DNA Skin Test",
    description:
      "An SNP genotyping-based test that assesses genetic predisposition to skin aging, oxidative stress, UV sensitivity, inflammation, acne, pigmentation, collagen health, skin texture, and nutritional requirements. Helps develop personalized skincare and wellness strategies.",
  },
  {
    name: "My DNA CardioMet Test",
    description:
      "An SNP genotyping-based cardiometabolic risk assessment that evaluates genetic predisposition to coronary artery disease, myocardial infarction, atrial fibrillation, hypertension, type 2 diabetes, obesity, lipid disorders, and thrombosis. Supports early risk assessment and preventive healthcare planning.",
  },
  {
    name: "CAD-PRS Panel",
    description:
      "An SNP genotyping-based Polygenic Risk Score (PRS) test that estimates an individual's inherited genetic risk for Coronary Artery Disease by analyzing multiple genetic variants associated with cardiovascular risk. Supports early preventive interventions and personalized risk management.",
  },
];

const MicroarrayTestsTable = () => {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 font-roboto bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-[#005C96] mb-6 sm:mb-8 underline underline-offset-4">
          Microarray Panels
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
          <table className="w-full min-w-[600px] text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#005C96] text-white">
                <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold w-[30%]">
                  Test Name
                </th>
                <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {tests.map(({ name, description }, i) => (
                <tr
                  key={name}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 sm:px-5 py-3 sm:py-4 font-semibold text-[#005C96] align-top border-t border-gray-200">
                    {name}
                  </td>
                  <td className="px-4 sm:px-5 py-3 sm:py-4 text-gray-700 leading-relaxed align-top border-t border-gray-200">
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MicroarrayTestsTable;
