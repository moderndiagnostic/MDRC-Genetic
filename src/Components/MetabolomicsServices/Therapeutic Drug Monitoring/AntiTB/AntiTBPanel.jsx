import React from "react";

import AntiTBIntro from "./AntiTBIntro";
import AntiTBWhy from "./AntiTBWhy";
import AntiTBMarkers from "./AntiTBMarkers";
import AntiTBPrecision from "./AntiTBPrecision";
import AntiTBIntervention from "./AntiTBIntervention";
import AntiTBTracking from "./AntiTBTracking";
import PromoBanner from "../../../HealthPregnancy/InfertilityGenetics/PromoBanner";
import heroImg from "../../../../assets/tdm-antitb-hero.png";

const AntiTBPanel = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative overflow-hidden md:overflow-visible text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
            <div className="text-white text-center md:text-left w-full md:w-1/2">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg md:text-xl mb-4"
              >
                ← Back to Home
              </button>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                First-Line Anti-Tuberculosis <br className="hidden sm:block" /> Drugs
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
                LC-MS/MS therapeutic drug monitoring of all four first-line anti-TB
                drugs via dried blood spot for safer, personalized dosing.
              </p>
            </div>
            <div className="relative flex justify-center items-center w-full md:w-auto py-4 sm:py-5 md:py-8">
              <div className="relative w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-[#15AEE5]/40 blur-xl md:bg-[#15AEE5]/50 md:blur-[28px] scale-105 pointer-events-none" />
                <div className="relative overflow-hidden rounded-full w-full h-full border-2 md:border-[1px] border-[#000000] shadow-[0_0_28px_10px_rgba(255,255,255,0.35)] md:shadow-[0_0_72px_28px_rgba(255,255,255,0.46)] box-border">
                  <img
                    src={heroImg}
                    alt="First-Line Anti-Tuberculosis Drugs TDM"
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <AntiTBIntro />
      </div>
      <AntiTBWhy />
      <AntiTBMarkers />
      <AntiTBPrecision />
      <AntiTBIntervention />
      <AntiTBTracking />
      <PromoBanner
        text="Ready to personalize your anti-TB therapy with gold-standard TDM? Book the First-Line Anti-TB Drugs panel today."
        buttonText="Book Your Test"
      />
    </>
  );
};

export default AntiTBPanel;
