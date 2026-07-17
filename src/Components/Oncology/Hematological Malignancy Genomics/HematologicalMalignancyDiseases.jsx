import React from "react";

const HematologicalMalignancyDiseases = () => {
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
Hematological Malignancy Genomics

          </h2>
          {/* <p className="font-bold text-gray-700 mb-4">Comprehensive Microbiological and
Molecular Diagnostics</p> */}

        
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
Genomic profiling of hematological malignancies utilizes NGS to identify somatic mutations, gene fusions, and copy number alterations critical for diagnosis, classification, prognostication, and therapeutic decision-making in leukemias, lymphomas, and myeloproliferative neoplasms.
          </p>

          
         
        </div>

      </div>
    </section>
  );
};

export default HematologicalMalignancyDiseases;