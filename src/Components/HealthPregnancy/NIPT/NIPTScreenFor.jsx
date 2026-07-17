import React from "react";
import { Dna, Baby, Layers, Microscope } from "lucide-react";

const screeningGroups = [
  {
    icon: Dna,
    title: "Common Chromosomal Aneuploidies",
    items: [
      "Down Syndrome (Trisomy 21)",
      "Edwards Syndrome (Trisomy 18)",
      "Patau Syndrome (Trisomy 13)",
    ],
  },
  {
    icon: Baby,
    title: "Sex Chromosome Aneuploidies",
    items: [
      "Turner Syndrome (Monosomy X)",
      "Triple X Syndrome (XXX)",
      "Klinefelter Syndrome (XXY)",
      "Jacob's Syndrome (XYY)",
    ],
  },
  {
    icon: Layers,
    title: "Comprehensive Chromosome Coverage",
    items: [
      "Analysis of Chromosomes 1–22",
      "Detection of major chromosomal imbalances",
      "Genome-wide screening capability",
    ],
  },
  {
    icon: Microscope,
    title: "Optional Extended Microdeletion Screening",
    items: [
      "DiGeorge Syndrome",
      "1p36 Deletion Syndrome",
      "Prader-Willi Syndrome",
      "Angelman Syndrome",
      "Cri-du-Chat Syndrome",
      "Wolf-Hirschhorn Syndrome",
    ],
  },
];

const standardNiptGroups = screeningGroups.slice(0, 3);
const extendedNiptGroups = screeningGroups;

function ScreeningCardGrid({ groups, columns = "lg:grid-cols-3" }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6 sm:gap-8`}>
      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <div
            key={group.title}
            className="bg-white rounded-xl p-5 sm:p-6 shadow-[0_0_10px_#7e7e7e] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div
              className="w-[52px] h-[52px] rounded-lg flex items-center justify-center mb-4"
              style={{
                background: "linear-gradient(to right, #15AEE5, #0C607F)",
              }}
            >
              <Icon className="text-white w-6 h-6" />
            </div>

            <h3 className="text-base sm:text-[17px] font-semibold text-gray-800 mb-3 leading-snug">
              {group.title}
            </h3>

            <ul className="space-y-2 flex-grow">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#727070] leading-relaxed"
                >
                  <span className="text-green-500 shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

const NIPTScreenFor = () => {
  return (
    <section className="bg-[#F5F7F9] py-6 sm:py-8 px-4 lg:py-12 sm:px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#15AEE5] font-medium text-sm sm:text-base">
            Comprehensive Screening
          </span>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-gray-800 mt-1">
            Conditions Screened by EVAA™
          </h2>
        </div>

        <div className="mb-12 sm:mb-14">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#005C96] mb-2">
              Standard NIPT
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
              Standard EVAA™ NIPS screens for common autosomal trisomies, sex
              chromosome aneuploidies, and genome-wide chromosomal imbalance
              across chromosomes 1–22.
            </p>
          </div>
          <ScreeningCardGrid groups={standardNiptGroups} columns="lg:grid-cols-3" />
        </div>

        <div>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#005C96] mb-2">
              Extended NIPT
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-4xl leading-relaxed">
              Extended EVAA™ NIPS includes all standard screening panels plus
              optional targeted microdeletion analysis for selected clinically
              significant sub-chromosomal disorders.
            </p>
          </div>
          <ScreeningCardGrid groups={extendedNiptGroups} columns="lg:grid-cols-4" />
        </div>
      </div>
    </section>
  );
};

export default NIPTScreenFor;
