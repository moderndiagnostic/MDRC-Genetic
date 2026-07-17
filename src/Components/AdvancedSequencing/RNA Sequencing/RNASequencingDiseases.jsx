import React from "react";

const RNASequencingDiseases = () => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-14">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-20">
        
       
        <div className="w-full md:w-1/2">
         <img
  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827923/vite-project/awcj7ti3nh4dfx5nrk3t.svg"
  alt="Newborn Screening"
  className="w-full scale-x-[-1]"
/>
        </div>

        
        <div className="w-full md:w-1/2">
          
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left">
RNA Sequencing (RNA-Seq / Transcriptome Analysis)
          </h2>
          <p className="font-bold text-gray-700 mb-4">Overview</p>

        
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-center md:text-left">
RNA Sequencing (RNA-Seq) analyzes the transcriptome to evaluate gene expression, alternative splicing, and gene fusions. It provides functional insights into genomic variants and is particularly valuable in oncology and rare disease diagnostics.
          </p>

          
         
        </div>

      </div>
    </section>
  );
};

export default RNASequencingDiseases;