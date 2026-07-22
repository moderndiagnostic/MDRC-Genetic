import React from "react";

import MetabolomicsIntro from "./MetabolomicsIntro";
import MetabolomicsHowItHelps from "./MetabolomicsHowItHelps";
import MetabolomicsPanels from "./MetabolomicsPanels";
import MetabolomicsTmsLink from "./MetabolomicsTmsLink";
import MetabolomicsFAQ from "./MetabolomicsFAQ";
import PromoBanner from "../HealthPregnancy/InfertilityGenetics/PromoBanner";

const MetabolomicsServices = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20 overflow-x-hidden">
          <div className="metab-hero-inner max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-24 lg:py-28">
            <div className="text-white text-center max-w-3xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Metabolomics <br className="hidden sm:block" /> Services
              </h1>
            </div>
          </div>
        </section>

        <MetabolomicsIntro />
      </div>

      <MetabolomicsHowItHelps />
      <MetabolomicsPanels />
      <MetabolomicsTmsLink />
      <PromoBanner />
      <MetabolomicsFAQ />
    </>
  );
};

export default MetabolomicsServices;
