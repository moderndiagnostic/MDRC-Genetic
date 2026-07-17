import React from "react";
import { Award, Cpu, Users, Baby } from "lucide-react";
import PromoBanner from "./NIPTPromoBanner";

const mdrcCards = [
  {
    icon: Award,
    title: "International Quality Standards",
    points: [
      "NABL Accredited Laboratory",
      "CAP Accredited Assays",
      "Clinically Validated Testing Protocols",
    ],
  },
  {
    icon: Cpu,
    title: "Advanced Bioinformatics",
    points: [
      "Sophisticated bioinformatics pipelines",
      "Ensures accuracy, reliability, and clinical relevance",
    ],
  },
  {
    icon: Users,
    title: "Expertise You Can Trust",
    points: [
      "Molecular geneticists and laboratory specialists",
      "Comprehensive support from sample processing to result interpretation",
    ],
  },
  {
    icon: Baby,
    title: "Specialized Testing for Complex Pregnancies",
    points: [
      "Twin Pregnancies",
      "IVF Pregnancies",
      "Egg Donor Pregnancies",
      "Surrogacy Cases",
    ],
  },
];

const NIPTWhyChoose = () => {
  return (
    <>
      <section className="bg-white py-10 sm:py-8 px-4 lg:py-14 sm:px-6 md:px-10 font-roboto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 text-center leading-snug">
            Why MDRC?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {mdrcCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(to right, #15AEE5, #0C607F)",
                    }}
                  >
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#005C96] mb-3">
                      {card.title}
                    </h3>
                    <ul className="space-y-2">
                      {card.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm sm:text-base text-gray-600"
                        >
                          <span className="text-green-500 shrink-0">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <PromoBanner />
    </>
  );
};

export default NIPTWhyChoose;
