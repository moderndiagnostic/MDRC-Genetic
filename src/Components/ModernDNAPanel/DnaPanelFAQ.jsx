import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What are Modern DNA Panels?",
    answer:
      "Modern DNA Panels are advanced genomic tests that analyze inherited genetic variations to assess lifetime health risks, metabolic traits, and predispositions — helping create personalised, preventative healthcare plans before symptoms appear.",
  },
  {
    question: "How is a Modern DNA Panel sample collected?",
    answer:
      "Sample collection is simple and painless — either a quick cheek swab or a standard blood draw at any MDRC centre or through our home collection service. No special preparation is required in most cases.",
  },
  {
    question: "Who should consider Modern DNA Panel testing?",
    answer:
      "Anyone seeking proactive health insights can benefit — including individuals focused on fitness, nutrition, weight management, cardiovascular risk, diabetes prevention, immunity, ageing, or gender-specific health concerns.",
  },
  {
    question: "How are Modern DNA Panel results used clinically?",
    answer:
      "Results provide clear risk stratification with evidence-based dietary, lifestyle, and clinical monitoring recommendations, enabling clinicians to tailor screening schedules and therapeutic interventions for better long-term outcomes.",
  },
];

const DnaPanelFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-xl sm:text-[28px] md:text-[32px] font-semibold text-gray-800 mb-6 sm:mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-l-4 border-[#1160A5] overflow-hidden transition"
            >
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

export default DnaPanelFAQ;
