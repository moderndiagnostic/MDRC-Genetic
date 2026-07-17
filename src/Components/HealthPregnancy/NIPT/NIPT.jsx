import React from "react";
import NIPTCytogenetic from "./NIPTCytogenetic";
import NIPTScreenFor from "./NIPTScreenFor";
import NIPTAdvantages from "./NIPTAdvantages";
import NIPTInfoSection from "./NIPTInfoSection";
import NIPTWhyChoose from "./NIPTWhyChoose";
import NIPTFAQ from "./NIPTFAQ";

const NIPT = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
            <div className="text-white text-center md:text-left w-full md:w-1/2">
              <p className="text-[#15AEE5] font-medium text-sm sm:text-base mb-2">
                Advanced Prenatal Genetic Screening for a Healthier Pregnancy
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                EVAA™ Non-Invasive <br className="hidden sm:block" /> Prenatal
                Screening (NIPS)
              </h1>
            </div>

            <div className="relative flex justify-center items-center w-full md:w-auto py-4 sm:py-6">
              <div className="overflow-hidden">
                <img
                  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828054/vite-project/x37csmszlwzms69b44yo.svg"
                  alt="EVAA Prenatal Screening"
                  className="rounded-full w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl pointer-events-none" />
            </div>
          </div>
        </section>

        <NIPTCytogenetic />
      </div>

      <NIPTScreenFor />
      <NIPTAdvantages />
      <NIPTInfoSection />
      <NIPTWhyChoose />
      <NIPTFAQ />
    </>
  );
};

export default NIPT;
