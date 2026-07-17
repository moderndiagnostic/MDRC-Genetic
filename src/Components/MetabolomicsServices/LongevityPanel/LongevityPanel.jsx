import React from "react";
import LongevityPanelIntro from "./LongevityPanelIntro";
import LongevityPanelGauges from "./LongevityPanelGauges";
import LongevityPanelIntervention from "./LongevityPanelIntervention";
import PromoBanner from "../../HealthPregnancy/InfertilityGenetics/PromoBanner";

const LongevityPanel = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-20 lg:py-24">
            <div className="text-white text-center md:text-left max-w-3xl">
              <p className="text-[#15AEE5] font-medium text-sm sm:text-base mb-2">
                Metabolomics Services
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Longevity Panel
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                Measure your biological aging speed through four critical metabolic
                ratios and take control of your health trajectory.
              </p>
            </div>
          </div>
        </section>

        <LongevityPanelIntro />
      </div>

      <LongevityPanelGauges />
      <LongevityPanelIntervention />
      <PromoBanner text="Book your Longevity Panel at MDRC to measure your aging speed and optimize your wellness plan." />
    </>
  );
};

export default LongevityPanel;
