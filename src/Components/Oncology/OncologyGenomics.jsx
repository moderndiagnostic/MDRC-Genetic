import React from "react";
// import Disease from "./Disease";
// import GeneticServices from "./GeneticServices";
import OncologyGenomicsAQ from "./OncologyGenomicsAQ";
import OncologyServices from "./OncologyServices";
import Oncology from "./Oncology";
// import ReproductivePregnancy from "./ReproductivePregnancy";
// import GeneticServices from "./GeneticServices";
// import FAQ from "../HomePage/FAQ";
// 
const   OncologyGenomics = () => {
  return (
    <>
    <div className="font-roboto">
      <section className="relative overflow-hidden text-white bg-gradient-to-b from-[#005E91] to-[#0C759A] lg:pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-20 flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8">
          
          <div className="text-white text-center md:text-left">
            

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Oncology Genomics

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
                src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778828026/vite-project/fhmmlxpueqgkdf5v5qcg.svg"
                alt="About"
                className="rounded-full mt-11 lg:mt-0"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl"></div>
          </div>
        </div>
      </section>

     
    </div>
    {/* <Disease/>
    <GeneticServices/> */}
    <Oncology/>
    <OncologyServices/>
    <OncologyGenomicsAQ/>
    </>
  );
};

export default OncologyGenomics;