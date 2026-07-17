import React from "react";
import Disease from "./Disease";
import GeneticServices from "./GeneticServices";
import DiseaseFAQ from "./DiseaseFAQ";
import PromoBanner from "../../Components/HealthPregnancy/InfertilityGenetics/PromoBanner";
// import ReproductivePregnancy from "./ReproductivePregnancy";
// import GeneticServices from "./GeneticServices";
// import FAQ from "../HomePage/FAQ";
// 
const InfectiousDisease = () => {
  return (
    <>
    <div className="font-roboto  ">
<section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-20 flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8">
          
          <div className="text-white text-center md:text-left">
            <button
              onClick={() => window.location.href = "/"}
              className="flex items-center justify-center md:justify-start gap-2 text-xl mb-4"
            >
              ← Back to Home
            </button>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Infectious Disease
              <br />
             
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

          <div className="relative flex justify-center items-center">
            <div className="overflow-hidden">
              <img
                src="/assets/Group 5490 (3).svg"
                alt="About"
                className="rounded-full mt-11 lg:mt-0"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
          </div>
        </div>
        
      </section>

 <div className="block md:hidden">
            <Disease/>
          </div>
     
    </div>
     <div className="hidden md:block">
          <Disease/>
        </div>
    
    <GeneticServices/>
    <PromoBanner/>
    <DiseaseFAQ/>
    </>
  );
};

export default InfectiousDisease;