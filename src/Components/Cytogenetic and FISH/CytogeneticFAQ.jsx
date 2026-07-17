import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is cytogenetic testing?",
    answer:
      "   Cytogenetic testing analyzes the number and structure of chromosomes to detect abnormalities such as deletions, duplications, translocations, or aneuploidy associated with genetic disorders.",
  },
  {
    question: "What is FISH and how does it work?",
    answer:
      "  Fluorescence In Situ Hybridization (FISH) is a molecular cytogenetic technique that uses fluorescent probes to bind specific DNA sequences on chromosomes, allowing targeted detection of genetic abnormalities.",
  },
  {
    question: "What conditions can be detected using cytogenetics and FISH?",
    answer:
      "These tests are used to identify chromosomal disorders such as Down syndrome, Turner syndrome, and structural rearrangements, as well as certain cancers and infertility-related abnormalities.",
  },
  {
    question: "When is cytogenetic or FISH testing recommended?",
    answer:
      " Testing is recommended in cases of developmental delay, congenital anomalies, recurrent pregnancy loss, infertility, or for cancer diagnosis and prognosis.",
  },
  {
    question: "What is the difference between karyotyping and FISH?",
    answer:
      "Karyotyping provides a whole-genome overview of chromosomes, detecting large structural changes, while FISH is more targeted and sensitive for identifying specific genetic regions or smaller abnormalities.",
  },
];

const CytogeneticFAQ = () => {
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

export default CytogeneticFAQ;