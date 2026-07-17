import React from "react";

const Oncology = () => {
  return (
    <section className="w-full  py-10 md:py-14">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-20">
        
       
        <div className="w-full md:w-1/2">
         <img
  src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1778827908/vite-project/xcpewrot0pfgjis2jc6n.svg"
  alt="Newborn Screening"
  className="w-full scale-x-[-1]"
/>
        </div>

        
        <div className="w-full md:w-1/2">
          
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 ">
           Oncology Genomics

          </h2>
          <p className="font-bold text-gray-700 mb-4">Precision Cancer Diagnostics for Targeted Care

</p>

        
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          MDRC Genomics delivers advanced molecular oncology services focused on the identification of clinically actionable genetic alterations in cancer. Using high-resolution sequencing technologies, our laboratory enables precise tumor profiling to support early diagnosis, prognostic stratification, and selection of targeted therapies.

          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
Cancer is fundamentally a genomic disease driven by somatic and germline alterations. Comprehensive genomic analysis allows detection of driver mutations, resistance mechanisms, and biomarkers that guide personalized treatment decisions in both solid tumors and hematological malignancies.

          </p>

          
         
        </div>

      </div>
    </section>
  );
};

export default Oncology;