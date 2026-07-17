import React from "react";
import { ngsPanelTests } from "./ngsPanelTests";

const NGSPanelTestsTable = () => {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 font-roboto bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold text-[#005C96] mb-6 sm:mb-8 underline underline-offset-4">
          NGS Panels
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
          <table className="w-full min-w-[400px] text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#005C96] text-white">
                <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold w-16 text-center">
                  S.No.
                </th>
                <th className="px-4 sm:px-5 py-3 sm:py-4 font-semibold">
                  Test Name
                </th>
              </tr>
            </thead>
            <tbody>
              {ngsPanelTests.map(({ name }, index) => {
                const serial = index + 1;

                return (
                  <tr
                    key={name}
                    className={serial % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 sm:px-5 py-3 sm:py-4 text-gray-600 text-center align-top border-t border-gray-200">
                      {serial}
                    </td>
                    <td className="px-4 sm:px-5 py-3 sm:py-4 font-medium text-gray-800 align-top border-t border-gray-200">
                      {name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default NGSPanelTestsTable;
