import React from "react";

import TandemMass from "./TandemMass";
import LCMSSection from "./LCMSSection";
import TestPanel from "./TestPanel";
import PromoBanner from "../HealthPregnancy/InfertilityGenetics/PromoBanner";
import FAQ from "../HomePage/FAQ";

const Tms = () => {
  return (
    <>
      <div className="font-roboto">

        {/* ✅ HERO SECTION (same container) */}
        <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-10">

          {/* ✅ MOBILE: TandemMass hero ke andar sabse upar */}
         
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8">

            {/* Left */}
            <div className="text-white text-center md:text-left">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center md:justify-start gap-2 text-xl mb-4"
              >
                ← Back to Home
              </button>

              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Tandem Mass Spectrometry  <br /> (TMS)
              </h1>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828050/vite-project/sg9b6bi3mhospqje1l0s.svg"
                alt="About"
                className="rounded-full mt-11 lg:mt-0"
              />
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
            </div>

          </div>
        </section>

        {/* ✅ DESKTOP: TandemMass hero ke baad niche */}
        
         <div className="block md:hidden">
            <TandemMass />
          </div>


      </div>

      {/* बाकी sections */}
      <div className="hidden md:block">
          <TandemMass />
        </div>
      <LCMSSection />
      <TestPanel />
      <PromoBanner />
      <FAQ />
    </>
  );
};

export default Tms;