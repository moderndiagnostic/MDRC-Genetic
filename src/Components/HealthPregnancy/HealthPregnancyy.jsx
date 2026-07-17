import React from "react";
import ReproductivePregnancy from "./ReproductivePregnancy";
import GeneticServices from "./GeneticServices";
import FAQ from "../HomePage/FAQ";
import ReproductiveFAQ from "./ReproductiveFAQ";

const HealthPregnancyy = () => {
  return (
    <>
    <div className="font-roboto">
<section className="relative overflow-hidden md:overflow-visible text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-20">
<div className="metab-hero-inner max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5 sm:py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-7 md:gap-10">
          
          <div className="text-white text-center md:text-left w-full md:w-1/2">
            <button
              onClick={() => window.location.href = "/"}
              className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base md:text-lg mb-3 sm:mb-4"
            >
              ← Back to Home
            </button>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Reproductive Health &
              <br />
              <span className="text-[#15AEE5]">Pregnancy</span>
            </h1>

            {/* <p className="mt-4 text-sm sm:text-base md:text-xl opacity-90 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p> */}
          </div>

          <div className="relative flex justify-center items-center w-full md:w-auto py-1 sm:py-3 md:py-8 shrink-0">
            <div className="metab-hero-circle relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-[#15AEE5]/40 blur-xl md:bg-[#15AEE5]/50 md:blur-[28px] scale-105 pointer-events-none" />
              <div className="relative overflow-hidden rounded-full w-full h-full border-2 md:border-[1px] border-[#000000] shadow-[0_0_16px_6px_rgba(255,255,255,0.28)] md:shadow-[0_0_72px_28px_rgba(255,255,255,0.46)] box-border">
                <img
                  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828046/vite-project/gvpgv59les7ibzwew1t7.svg"
                  alt="About"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
    <ReproductivePregnancy/>
    <GeneticServices/>
    <ReproductiveFAQ/>
    </>
  );
};

export default HealthPregnancyy;