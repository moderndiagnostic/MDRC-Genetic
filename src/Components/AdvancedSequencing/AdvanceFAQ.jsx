import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is pharmacogenomics?",
    answer:
      "  Pharmacogenomics is the study of how genetic variations influence an individual’s response to medications, including drug efficacy, metabolism, and risk of adverse effects.",
  },
  {
    question: "Why is pharmacogenomic testing important?",
    answer:
      "  It enables personalized medicine by helping clinicians select the most effective drug and optimal dosage based on a patient’s genetic profile, reducing trial-and-error prescribing.",
  },
  {
    question: "Which drugs are commonly guided by pharmacogenomics?",
    answer:
      " Common examples include anticoagulants (e.g., warfarin), antiplatelet agents (e.g., clopidogrel), antidepressants, chemotherapeutic agents, and immunosuppressants.",
  },
  {
    question: " What genes are typically analyzed in pharmacogenomic testing?",
    answer:
      "Key genes include CYP450 family genes (such as CYP2C19, CYP2D6), TPMT, VKORC1, and others involved in drug metabolism and transport.",
  },
  {
    question: "How are pharmacogenomic test results used clinically?",
    answer:
      "Results guide drug selection and dosing, predict potential adverse drug reactions, improve therapeutic outcomes, and support safer, more effective treatment strategies.",
  },
];

const AdvanceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-8 px-4 bg-[#f9fafb] flex justify-center">
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

export default AdvanceFAQ;