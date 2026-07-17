import React from "react";

import DnaPanelIntro from "./DnaPanelIntro";
import DnaPanelSections from "./DnaPanelSections";
import DnaPanelTests from "./DnaPanelTests";
import HowItWorks from "./HowItWorks";
import ClinicalActionability from "./ClinicalActionability";
import PromoBanner from "../HealthPregnancy/InfertilityGenetics/PromoBanner";
import DnaPanelFAQ from "./DnaPanelFAQ";

const ModernDNAPanel = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative overflow-hidden md:overflow-visible text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5 sm:py-7 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-10">
            <div className="text-white text-center md:text-left w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Modern DNA <br className="hidden sm:block" /> Panels
              </h1>
            </div>

            <div className="relative flex justify-center items-center w-full md:w-auto py-4 sm:py-5 md:py-8">
              <div className="relative w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-[#15AEE5]/40 blur-xl md:bg-[#15AEE5]/50 md:blur-[28px] scale-105 pointer-events-none" />
                <div className="relative overflow-hidden rounded-full w-full h-full border-2 md:border-[1px] border-[#000000] shadow-[0_0_28px_10px_rgba(255,255,255,0.35)] md:shadow-[0_0_72px_28px_rgba(255,255,255,0.46)] box-border">
                  <div
                    className="absolute inset-0 rounded-full bg-cover bg-center md:hidden"
                    style={{ backgroundImage: "url('/assets/Modern-Dna.png')" }}
                  />
                  <img
                    src="/assets/Modern-Dna.png"
                    alt="Modern DNA Panels"
                    className="hidden w-full h-full rounded-full object-cover object-center filter brightness-90 md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DnaPanelIntro />
      </div>

      <DnaPanelSections />
      <HowItWorks />
      <DnaPanelTests />
      <ClinicalActionability />
      <PromoBanner />
      <DnaPanelFAQ />
    </>
  );
};

export default ModernDNAPanel;
