import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is a Rare NGS Panel?",
    answer:
      " A Rare NGS Panel is a targeted genetic test using next-generation sequencing (NGS) to analyze multiple genes associated with rare and inherited disorders in a single assay.",
  },
  {
    question: "Who should consider a Rare NGS Panel test?",
    answer:
      " It is recommended for individuals with unexplained clinical symptoms, suspected genetic conditions, family history of rare diseases, or cases where conventional diagnostic methods have been inconclusive.",
  },
  {
    question: "What types of conditions can be detected?",
    answer:
      "T Rare NGS Panels can identify genetic variants linked to neurological, metabolic, skeletal, pediatric, and multisystem disorders, depending on the genes included in the panel.",
  },
  {
    question: "What are the advantages of a Rare NGS Panel?",
    answer:
      "  It offers high-throughput, comprehensive analysis with improved diagnostic yield, faster turnaround time, and cost-effectiveness compared to sequential single-gene testing.",
  },
  {
    question: "How are the results clinically useful?",
    answer:
      "Results help in confirming diagnosis, guiding treatment decisions, enabling genetic counseling, assessing recurrence risk, and supporting personalized patient management.",
  },
];

const WholFAQ = () => {
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

export default WholFAQ;