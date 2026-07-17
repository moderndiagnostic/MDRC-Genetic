import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What does a Chromosomal Microarray test detect?",
    answer:
      "The test detects chromosomal gains and losses, including microdeletions, microduplications, Copy Number Variations (CNVs), and regions of Loss of Heterozygosity (LOH).",
  },
  {
    question: "Is Microarray testing better than karyotyping?",
    answer:
      "Microarray offers significantly higher resolution and can detect smaller chromosomal abnormalities that may be missed by traditional karyotyping.",
  },
  {
    question: "Is Microarray recommended for Autism Spectrum Disorder?",
    answer:
      "Yes. International genetic guidelines recommend Chromosomal Microarray as a first-line genetic test for individuals with developmental delay, intellectual disability, and Autism Spectrum Disorder.",
  },
  {
    question: "Can Microarray detect all genetic disorders?",
    answer:
      "No. It cannot detect single-gene mutations, balanced translocations, inversions, or low-level mosaicism. Additional genetic testing may be required depending on the clinical indication.",
  },
  {
    question: "How long does it take to receive results?",
    answer:
      "The standard turnaround time is approximately 15 working days.",
  },
  {
    question: "Why is Microarray used after recurrent miscarriages?",
    answer:
      "Microarray testing can identify chromosomal abnormalities in pregnancy tissue (POC), helping determine whether genetic factors contributed to pregnancy loss and assisting in future reproductive planning.",
  },
];

const MicroarrayFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 flex justify-center font-roboto">
      <div className="max-w-4xl w-full">
        <h2 className="text-xl sm:text-[28px] md:text-[32px] font-semibold text-gray-800 mb-6 sm:mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-l-4 border-[#1160A5] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-start sm:items-center p-4 sm:p-5 text-left cursor-pointer gap-3"
              >
                <span className="text-[14px] sm:text-[16px] md:text-[17px] font-medium text-gray-700 leading-snug">
                  {faq.question}
                </span>
                <HiChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
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
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
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

export default MicroarrayFAQ;
