import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What are infectious diseases?",
    answer:
      "  Infectious diseases are disorders caused by pathogenic microorganisms such as bacteria, viruses, fungi, or parasites. These organisms can invade the body, multiply, and lead to clinical illness.",
  },
  {
    question: "How are infectious diseases transmitted?",
    answer:
      " Transmission can occur through direct contact, airborne droplets, contaminated food or water, blood transfusion, vector-borne spread (e.g., mosquitoes), or person-to-person exposure.",
  },
  {
    question: "What are the common symptoms of infectious diseases?",
    answer:
      "Symptoms vary depending on the pathogen but commonly include fever, fatigue, cough, diarrhea, body aches, inflammation, and in severe cases, organ dysfunction.",
  },
  {
    question: " How are infectious diseases diagnosed?",
    answer:
      " Diagnosis involves laboratory testing such as microbiological cultures, molecular assays (PCR), antigen/antibody detection, and advanced diagnostic techniques for precise pathogen identification.",
  },
  {
    question: "How can infectious diseases be prevented and managed?",
    answer:
      "Prevention includes vaccination, proper hygiene, safe food and water practices, and infection control measures. Management depends on the cause and may involve antibiotics, antivirals, antifungals, or supportive care.",
  },
];

const DiseaseFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-8 px-4  flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-800 mb-10 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-l-4 border-[#1160A5] overflow-hidden transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
              >
                <span className="text-[16px] md:text-[17px] font-medium text-gray-700">
                  {faq.question}
                </span>

                <HiChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#1160A5]" : ""
                  }`}
                  size={22}
                />
              </button>

              {/* Answer with smooth animation */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[15px] text-gray-600 leading-relaxed">
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

export default DiseaseFAQ;