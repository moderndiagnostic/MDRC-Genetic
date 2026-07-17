import React from "react";

const rows = [
  ["Resolution", "High (100 KB–1 MB)", "Lower (5–10 MB)"],
  ["Detects Microdeletions", "Yes", "Limited"],
  ["Detects Microduplications", "Yes", "Limited"],
  ["Genome-wide CNV Analysis", "Yes", "No"],
  ["Culture Requirement", "Not Always", "Required"],
  ["Success Rate", "Higher", "Lower"],
  ["Turnaround Time", "Faster", "Longer"],
];

const MicroarrayComparison = () => {
  return (
    <section className="py-8 sm:py-6 px-4 lg:py-10 sm:px-6 font-roboto bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-6 text-center">
          Comparison: Microarray vs Conventional Karyotyping
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
          <table className="w-full min-w-[500px] text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#005C96] text-white">
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">Chromosomal Microarray</th>
                <th className="px-4 py-3 font-semibold">Conventional Karyotyping</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, cma, karyo], i) => (
                <tr
                  key={feature}
                  className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-3 font-medium text-gray-800 border-t border-gray-200">
                    {feature}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-t border-gray-200">
                    {cma}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-t border-gray-200">
                    {karyo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 sm:mt-10">
          <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-gray-800 mb-4">
            Limitations of Chromosomal Microarray
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            While Chromosomal Microarray is highly sensitive, it has certain
            limitations. The test cannot reliably detect:
          </p>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
            {[
              "Single gene mutations",
              "Balanced chromosomal translocations",
              "Chromosomal inversions",
              "Low-level mosaicism",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-500 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mt-4">
            In cases where these abnormalities are suspected, additional genetic
            testing may be recommended by the clinician.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <h3 className="text-lg font-semibold text-[#005C96] mb-3">
              Sample Requirements
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>• Amniotic Fluid (AF)</li>
              <li>• Products of Conception (POC)</li>
              <li>• Maternal Sample (When Required)</li>
              <li>• EDTA Whole Blood</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <h3 className="text-lg font-semibold text-[#005C96] mb-3">
              Turnaround Time (TAT)
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Approximately <strong>15 Working Days</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroarrayComparison;
