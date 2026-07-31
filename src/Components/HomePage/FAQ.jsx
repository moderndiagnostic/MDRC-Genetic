import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What services does MDRC Genomics offer?",
    answer:
      "MDRC Genomics provides a comprehensive range of molecular diagnostic services including reproductive genetics, infectious disease testing, cytogenetics & FISH, rare disease panels, whole exome/genome sequencing, pharmacogenomics, oncology profiling, and advanced sequencing technologies.",
  },
  {
    question: "Why is genomics important in Modern Diagnostic?",
    answer:
      "Genomics enables precision medicine by identifying genetic variations that influence disease risk, diagnosis, and treatment response, allowing for proactive and personalized healthcare decisions.",
  },
  {
    question: "How accurate and reliable are MDRC’s genetic tests?",
    answer:
      "All tests are performed using validated protocols, advance NGS platforms with stringent quality control measures to ensure high accuracy and reliability.",
  },
  {
    question: "Who should consider genetic testing?",
    answer:
      "Genetic testing is recommended for individuals with a family history of genetic disorders, couples planning pregnancy, patients with unexplained clinical conditions, and those seeking personalized treatment strategies.",
  },
  // {
  //   question: "Does MDRC provide support after testing?",
  //   answer:
  //     "Yes, MDRC offers expert clinical guidance, detailed clinical reports, and support to help clinicians and patients interpret results and make informed healthcare decisions.",
  // },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-5 sm:py-6 md:py-8 px-4 sm:px-6 flex justify-center">
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-4 sm:mb-5 md:mb-6 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-l-4 border-[#1160A5] overflow-hidden transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-3 sm:p-4 md:p-5 text-left cursor-pointer gap-3"
              >
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-left">
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
                  <p className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
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

export default FAQ;