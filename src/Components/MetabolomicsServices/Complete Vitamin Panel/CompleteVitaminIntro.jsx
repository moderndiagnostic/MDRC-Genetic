import React from "react";
import introImg from "../../../assets/complete-vitamin-intro.png";

const CompleteVitaminIntro = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#0C759A] md:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-5 sm:gap-6 md:gap-10">
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-[25px] font-semibold text-white md:text-gray-800 mb-3 sm:mb-4 leading-snug">
            Vitamins: The Spark Plugs of Your Cellular Engines
          </h2>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Your overall health, metabolic rate, immune defense, and daily vitality depend on a continuous supply of vital micronutrients. Vitamins serve as the primary spark plugs for your cellular engines, acting as mandatory co-factors for thousands of biochemical reactions. If your body lacks these critical nutrients, your metabolic pathways slow down, creating cellular friction that manifests as chronic fatigue, brain fog, weakened immunity, and poor tissue repair.
          </p>

          <p className="text-white md:text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            The Complete Fat- & Water-Soluble Vitamins Panel utilizes advanced blood analysis to measure the exact active forms of these essential compounds circulating in your system. By evaluating both water- and fat-soluble families together, this panel moves past generic nutritional assumptions. It delivers a precise biochemical map of your micronutrient status, providing the exact data you need to fuel your cellular pathways and optimize your daily health.
          </p>
        </div>

        <div className="group w-full md:w-1/2 order-2 md:order-1 max-w-xs sm:max-w-md md:max-w-none mx-auto px-1 sm:px-4 md:px-0">
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="absolute -inset-2 sm:-inset-3 bg-[#0C759A]/20 transition-transform duration-500 ease-out md:group-hover:-rotate-2"
              style={{
                clipPath:
                  "polygon(0 0, 93% 0, 100% 16%, 100% 100%, 7% 100%, 0 84%)",
              }}
            />

            <div
              className="relative overflow-hidden bg-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] transition-transform duration-500 ease-out md:group-hover:rotate-1 md:group-hover:scale-[1.015]"
              style={{
                clipPath:
                  "polygon(0 0, 93% 0, 100% 16%, 100% 100%, 7% 100%, 0 84%)",
              }}
            >
              <img
                src={introImg}
                alt="Complete Fat and Water-Soluble Vitamin Panel laboratory testing"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#0C759A]/15 via-transparent to-white/10"
              />
            </div>

            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-8 h-1 w-24 rounded-full bg-[#0C759A] shadow-[0_5px_14px_rgba(12,117,154,0.45)] transition-all duration-500 md:group-hover:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteVitaminIntro;
