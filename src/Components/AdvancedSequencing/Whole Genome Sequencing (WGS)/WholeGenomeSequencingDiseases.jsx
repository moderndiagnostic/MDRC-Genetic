import React from "react";

const WholeGenomeSequencingDiseases = () => {
  return (
    <section className="w-full  py-10 md:py-14">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        
       
        <div className="w-full md:w-1/2">
         <img
  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827923/vite-project/awcj7ti3nh4dfx5nrk3t.svg"
  alt="Newborn Screening"
  className="w-full scale-x-[-1]"
/>
        </div>

        
        <div className="w-full md:w-1/2">
          
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
Whole Genome Sequencing (WGS)

          </h2>
          <p className="font-bold text-gray-700 mb-4">Overview</p>

        
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
Whole Genome Sequencing (WGS) provides a comprehensive analysis of an individual’s entire genomic DNA, encompassing both coding (exonic) and non-coding regions. By interrogating approximately 3 billion base pairs, WGS enables the detection of a wide spectrum of genomic variations, making it the most inclusive approach for genetic diagnostics and research.
          </p>

          
         
        </div>

      </div>
    </section>
  );
};

export default WholeGenomeSequencingDiseases;