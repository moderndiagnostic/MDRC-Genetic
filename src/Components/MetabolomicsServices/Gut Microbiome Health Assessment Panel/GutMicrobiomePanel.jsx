import React from "react";

import GutMicrobiomeIntro from "./GutMicrobiomeIntro";
import GutMicrobiomeSupport from "./GutMicrobiomeSupport";
import GutMicrobiomeBiomarkers from "./GutMicrobiomeBiomarkers";
import GutMicrobiomeIntervention from "./GutMicrobiomeIntervention";
import GutMicrobiomeTracking from "./GutMicrobiomeTracking";
import PromoBanner from "../../HealthPregnancy/InfertilityGenetics/PromoBanner";

const GutMicrobiomePanel = () => {
  return (
    <>
      <div className="font-roboto">
        <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-10">
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
                Gut Microbiome Health <br /> Assessment Panel
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-xl opacity-90 max-w-xl">
                A precision metabolomic panel measuring the gut-derived organic acids that drive
                systemic inflammation and biological aging.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828050/vite-project/sg9b6bi3mhospqje1l0s.svg"
                alt="Gut Microbiome Health Assessment Panel"
                className="rounded-full mt-11 lg:mt-0"
              />
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
            </div>
          </div>
        </section>

        <GutMicrobiomeIntro />
      </div>

      <GutMicrobiomeSupport />
      <GutMicrobiomeBiomarkers />
      <GutMicrobiomeIntervention />
      <GutMicrobiomeTracking />

      <PromoBanner
        text="Ready to see what your gut is really telling you? Book the Gut-Driven Inflammatory Burden Panel today."
        buttonText="Book Your Test"
      />
    </>
  );
};

export default GutMicrobiomePanel;
