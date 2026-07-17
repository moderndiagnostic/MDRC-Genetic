import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is Metabolomics?",
    answer:
      "Metabolomics is an advanced testing approach that studies a large number of small molecules (metabolites) simultaneously in the body to understand how well your body is functioning and identify hidden health imbalances.",
  },
  {
    question: "How is Metabolomics different from routine blood tests?",
    answer:
      "Routine tests measure a limited number of health markers. Metabolomics provides a deeper view of your metabolism, nutrition, energy production, gut health, oxidative stress, and overall wellness.",
  },
  {
    question: "What can Metabolomics tell me about my health?",
    answer:
      "Metabolomics can provide insights into nutritional status, cellular energy production, gut health, oxidative stress, inflammation, aging rate, metabolic health, and body response to lifestyle and dietary factors.",
  },
  {
    question: "Who can benefit from Metabolomics testing?",
    answer:
      "Metabolomics may be beneficial for individuals interested in preventive healthcare, people with chronic health concerns, those experiencing fatigue or low energy, individuals seeking personalized nutritional guidance, and people interested in healthy aging and wellness.",
  },
  {
    question: "Can Metabolomics help identify nutritional deficiencies?",
    answer:
      "Yes. Advanced metabolomics testing can help identify nutritional imbalances and functional deficiencies that may not always be detected through routine testing.",
  },
  {
    question: "Can Metabolomics assess gut health?",
    answer:
      "Yes. Certain metabolites can provide valuable information about gut health, digestion, and the interaction between gut microbes and overall health.",
  },
  {
    question: "Can Metabolomics help with healthy aging and lifespan increase?",
    answer:
      "Metabolomics can evaluate markers related to cellular health, oxidative stress, and metabolism, which are important factors associated with healthy aging. Suboptimal markers can be optimized by nutritional interventions, exercise, or specific supplements to slow down the aging process.",
  },
  {
    question: "What sample is required for Metabolomics testing?",
    answer:
      "Depending on the panel, testing may require blood and/or urine.",
  },
  {
    question: "Is fasting required before the test?",
    answer:
      "Fasting requirements may vary depending on the panel. Your healthcare provider or laboratory will provide specific instructions before sample collection.",
  },
  {
    question: "Is Metabolomics a diagnostic test?",
    answer:
      "Metabolomics provides important biological and metabolic insights that support healthcare decisions but in some cases the results may need to be confirmed by other tests and clinical evaluation.",
  },
  {
    question: "What technology is used for Metabolomics testing?",
    answer:
      "Advanced metabolomics panels are performed using LC-MS/MS (Liquid Chromatography-Tandem Mass Spectrometry), which enables precise measurement of multiple metabolites simultaneously.",
  },
  {
    question: "Why is LC-MS/MS technology important?",
    answer:
      "LC-MS/MS offers high sensitivity, accuracy, and reliability, allowing comprehensive analysis of multiple biomarkers from a single sample.",
  },
  {
    question: "How can Metabolomics support personalized healthcare?",
    answer:
      "The test helps identify individual metabolic patterns and imbalances, enabling healthcare professionals to recommend more personalised nutrition, lifestyle, and treatment strategies.",
  },
  {
    question: "How often should Metabolomics testing be done?",
    answer:
      "The frequency depends on your health goals, clinical condition, and your doctor's recommendations.",
  },
  {
    question: "Can Metabolomics help monitor treatment or lifestyle changes?",
    answer:
      "Yes. Repeat testing may help evaluate how nutrition, lifestyle modifications, supplements, or medical treatments are affecting your metabolic health over time.",
  },
];

const MetabolomicsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 sm:py-8 px-3 sm:px-6 flex justify-center font-roboto">
      <div className="max-w-4xl w-full">
        <h2 className="text-lg sm:text-xl md:text-[28px] lg:text-[32px] font-semibold text-gray-800 mb-5 sm:mb-8 md:mb-10 text-center px-2">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl shadow-md border-l-4 border-[#1160A5] overflow-hidden transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start sm:items-center p-3 sm:p-4 md:p-5 text-left cursor-pointer gap-3 sm:gap-4"
              >
                <span className="text-[13px] sm:text-[15px] md:text-[17px] font-medium text-gray-700 leading-snug">
                  {index + 1}. {faq.question}
                </span>

                <HiChevronDown
                  className={`shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#1160A5]" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetabolomicsFAQ;
