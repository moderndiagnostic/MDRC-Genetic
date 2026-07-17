import React from "react";

import DepressionIntro from "./DepressionIntro";
import DepressionMarkers from "./DepressionMarkers";
import DepressionIntervention from "./DepressionIntervention";
import DepressionTracking from "./DepressionTracking";
import PromoBanner from "../../HealthPregnancy/InfertilityGenetics/PromoBanner";
import heroImg from "../../../assets/depression-assessment-hero.png";

const DepressionPanel = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative overflow-hidden md:overflow-visible text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
            {/* Left */}
            <div className="text-white text-center md:text-left w-full md:w-1/2">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg md:text-xl mb-4"
              >
                ← Back to Home
              </button>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Depression Assessment <br className="hidden sm:block" /> Panel
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
                An advanced neuro-metabolic, methylation & brain-axis panel mapping
                35 biomarkers linked to mood, energy, and emotional resilience.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-center w-full md:w-auto py-4 sm:py-5 md:py-8">
              <div className="relative w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-[#15AEE5]/40 blur-xl md:bg-[#15AEE5]/50 md:blur-[28px] scale-105 pointer-events-none" />
                <div className="relative overflow-hidden rounded-full w-full h-full border-2 md:border-[1px] border-[#000000] shadow-[0_0_28px_10px_rgba(255,255,255,0.35)] md:shadow-[0_0_72px_28px_rgba(255,255,255,0.46)] box-border">
                  <img
                    src={heroImg}
                    alt="Depression Assessment Panel"
                    className="w-full h-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DepressionIntro />
      </div>

      <DepressionMarkers />
      <DepressionIntervention />
      <DepressionTracking />

      <PromoBanner
        text="Ready to uncover the biochemical drivers of mood and energy? Book the Advanced Neuro-Metabolic, Methylation & Brain-Axis Panel today."
        buttonText="Book Your Test"
      />
    </>
  );
};

export default DepressionPanel;
