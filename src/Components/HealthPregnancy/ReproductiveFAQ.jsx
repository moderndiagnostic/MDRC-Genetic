import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "What is reproductive health?",
    answer:
      " Reproductive health refers to the proper functioning of the male and female reproductive systems, including hormonal balance, fertility potential, and the ability to conceive and carry a pregnancy to term.",
  },
  {
    question: "When should a couple seek fertility evaluation?",
    answer:
      " A fertility assessment is recommended if conception does not occur after 12 months of regular unprotected intercourse (or after 6 months if the female partner is above 35 years of age).",
  },
  {
    question: "What role does genetics play in infertility and pregnancy?",
    answer:
      "Genetic factors can influence fertility, embryo development, and pregnancy outcomes. Chromosomal abnormalities or gene mutations may lead to infertility, recurrent pregnancy loss, or inherited disorders.",
  },
  {
    question: "What is carrier screening and why is it important?",
    answer:
      " Carrier screening identifies individuals who carry gene mutations for inherited conditions. It helps assess the risk of passing genetic disorders to offspring and supports informed reproductive planning.",
  },
  {
    question: "What tests are recommended during pregnancy for genetic health?",
    answer:
      "Common tests include non-invasive prenatal testing (NIPT), first-trimester screening, and diagnostic procedures such as amniocentesis or chorionic villus sampling (CVS) to detect chromosomal or genetic abnormalities.",
  },
];

const ReproductiveFAQ = () => {
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

export default ReproductiveFAQ;