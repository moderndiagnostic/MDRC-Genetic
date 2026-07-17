import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "Is NIPS safe for my baby?",
    answer:
      "Yes. NIPS is completely non-invasive and poses no risk to the fetus or mother.",
  },
  {
    question: "How accurate is EVAA™ Prenatal Screening?",
    answer:
      "EVAA™ demonstrates over 99% detection rates for common trisomies, making it one of the most accurate prenatal screening tests available.",
  },
  {
    question: "Can NIPS replace amniocentesis?",
    answer:
      "NIPS is a screening test, not a diagnostic test. Positive results should be confirmed through diagnostic procedures such as amniocentesis.",
  },
  {
    question: "When can I take the test?",
    answer:
      "The test can be performed from 10 weeks of pregnancy onwards.",
  },
  {
    question: "Can IVF and twin pregnancies undergo NIPS?",
    answer:
      "Yes. EVAA™ has been validated for twins, IVF pregnancies, egg donor pregnancies, and surrogacy cases.",
  },
  {
    question: "Does NIPS determine the baby's gender?",
    answer:
      "Depending on physician request and local regulations, sex chromosome analysis may provide information regarding fetal sex chromosome composition.",
  },
];

const NIPTFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-6 sm:py-8 px-4 sm:px-6 flex justify-center font-roboto bg-gray-50">
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

export default NIPTFAQ;
