import React from "react";
// import Disease from "./Disease";
// import GeneticServices from "./";
import PharmacogenomicsAQ from "./AdvanceFAQ";
import AdvanceServices from "./AdvanceServices";
import Pharma from "./Advance";
import AdvanceFAQ from "./AdvanceFAQ";
import Advance from "./Advance";


const AdvancedSequencing = () => {
  return (
    <>
    <div className="font-roboto">
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
              Advanced Sequencing
              <br />
             
            </h1>

         
          </div>

          <div className="relative flex justify-center items-center">
            <div className="overflow-hidden">
              <img
                src="/assets/Group 5490 (8).svg"
                alt="About"
                className="rounded-full mt-11 lg:mt-0"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
          </div>
        </div>
      </section>

     
    </div>
   
   <Advance/>
    <AdvanceServices/>
   
    <AdvanceFAQ/>
    </>
  );
};

export default AdvancedSequencing;